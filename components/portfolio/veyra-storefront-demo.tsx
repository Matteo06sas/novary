"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Check,
  ChevronDown,
  Eye,
  Minus,
  Plus,
  ShoppingBag,
  SlidersHorizontal,
  X
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = ["Tutto", "Tute", "T-shirt", "Scarpe", "Felpe", "Accessori"] as const;

type Category = (typeof categories)[number];
type ProductCategory = Exclude<Category, "Tutto">;
type VisualKind = "set" | "shirt" | "shoe" | "hoodie" | "cap" | "pants" | "bag" | "sunglasses";

type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  material: string;
  tone: string;
  visual: VisualKind;
  topSeller?: boolean;
};

const products: Product[] = [
  {
    id: "tuta-oversize-nera",
    name: "Tuta Oversize Nera",
    category: "Tute",
    price: 129,
    description:
      "Completo morbido con linea ampia, pensato per un guardaroba urbano e pulito.",
    material: "Cotone compatto",
    tone: "Nero profondo",
    visual: "set",
    topSeller: true
  },
  {
    id: "t-shirt-boxy-bianca",
    name: "T-shirt Boxy Bianca",
    category: "T-shirt",
    price: 49,
    description:
      "Maglia essenziale con taglio squadrato, collo pulito e caduta strutturata.",
    material: "Jersey pesante",
    tone: "Bianco ottico",
    visual: "shirt",
    topSeller: true
  },
  {
    id: "sneaker-minimal-ivory",
    name: "Sneaker Minimal Ivory",
    category: "Scarpe",
    price: 159,
    description:
      "Sneaker bassa con profilo essenziale e suola piena, ideale per look quotidiani.",
    material: "Pelle sintetica premium",
    tone: "Avorio",
    visual: "shoe",
    topSeller: true
  },
  {
    id: "felpa-heavyweight-grigia",
    name: "Felpa Heavyweight Grigia",
    category: "Felpe",
    price: 89,
    description:
      "Felpa solida con cappuccio morbido, tasca frontale e finitura opaca.",
    material: "Felpa garzata",
    tone: "Grigio cenere",
    visual: "hoodie"
  },
  {
    id: "cappellino-logo-nero",
    name: "Cappellino Logo Nero",
    category: "Accessori",
    price: 39,
    description:
      "Accessorio minimale con visiera curva e dettaglio tono su tono.",
    material: "Twill di cotone",
    tone: "Nero",
    visual: "cap"
  },
  {
    id: "pantalone-cargo-sabbia",
    name: "Pantalone Cargo Sabbia",
    category: "Tute",
    price: 99,
    description:
      "Pantalone ampio con tasche pulite e vita regolabile, senza dettagli superflui.",
    material: "Tela tecnica",
    tone: "Sabbia",
    visual: "pants"
  },
  {
    id: "borsa-crossbody-avorio",
    name: "Borsa Crossbody Avorio",
    category: "Accessori",
    price: 79,
    description:
      "Borsa compatta con tracolla regolabile e volume netto per uso quotidiano.",
    material: "Nappa sintetica",
    tone: "Avorio caldo",
    visual: "bag"
  },
  {
    id: "occhiale-linea-fumo",
    name: "Occhiale Linea Fumo",
    category: "Accessori",
    price: 69,
    description:
      "Montatura sottile con lente scura e forma netta, pensata per completare il look.",
    material: "Acetato leggero",
    tone: "Fumo",
    visual: "sunglasses"
  }
];

type CartItem = {
  productId: string;
  quantity: number;
};

export function VeyraStorefrontDemo() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<Category>("Tutto");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "Tutto") {
      return products;
    }

    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const topSellers = useMemo(
    () => products.filter((product) => product.topSeller),
    []
  );

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => {
    const product = products.find((entry) => entry.id === item.productId);
    return total + (product?.price ?? 0) * item.quantity;
  }, 0);

  function addToCart(product: Product) {
    setCartItems((current) => {
      const existing = current.find((item) => item.productId === product.id);

      if (existing) {
        return current.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { productId: product.id, quantity: 1 }];
    });
  }

  function removeFromCart(productId: string) {
    setCartItems((current) =>
      current
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-[0_24px_90px_rgba(15,15,15,0.08)]">
      <div className="border-b border-neutral-200 px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500">
              Demo interattiva Veyra
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-normal text-neutral-950">
              Vetrina moda con carrello locale
            </h3>
          </div>

          <div className="flex items-center justify-between gap-3 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2">
            <ShoppingBag aria-hidden="true" className="h-4 w-4" />
            <span className="text-sm font-medium">{cartCount} articoli</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_330px]">
        <div className="min-w-0">
          <StoreHero />

          <section className="border-t border-neutral-200 px-4 py-7 sm:px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Piu scelti
                </p>
                <h4 className="mt-2 text-2xl font-semibold">
                  Selezione essenziale
                </h4>
              </div>

              <CategoryMenu
                selectedCategory={selectedCategory}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                onSelect={(category) => {
                  setSelectedCategory(category);
                  setMenuOpen(false);
                }}
              />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {topSellers.map((product) => (
                <TopSellerCard
                  key={product.id}
                  product={product}
                  onQuickView={() => setSelectedProduct(product)}
                />
              ))}
            </div>
          </section>

          <section className="border-t border-neutral-200 px-4 py-7 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Catalogo
                </p>
                <h4 className="mt-2 text-2xl font-semibold">
                  {selectedCategory === "Tutto"
                    ? "Tutti i prodotti"
                    : selectedCategory}
                </h4>
              </div>
              <div className="hidden rounded-md border border-neutral-200 px-3 py-2 text-sm text-neutral-600 sm:block">
                {filteredProducts.length} articoli
              </div>
            </div>

            <motion.div layout className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    shouldReduceMotion={shouldReduceMotion}
                    onAdd={() => addToCart(product)}
                    onQuickView={() => setSelectedProduct(product)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </section>
        </div>

        <MiniCart
          cartItems={cartItems}
          cartTotal={cartTotal}
          onAdd={(product) => addToCart(product)}
          onRemove={removeFromCart}
        />
      </div>

      <ProductModal
        product={selectedProduct}
        shouldReduceMotion={shouldReduceMotion}
        onClose={() => setSelectedProduct(null)}
        onAdd={(product) => addToCart(product)}
      />
    </div>
  );
}

function StoreHero() {
  return (
    <section className="grid gap-6 px-4 py-8 sm:px-6 md:grid-cols-[1fr_0.85fr] md:items-end md:py-10">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
          Nuova stagione
        </p>
        <h4 className="mt-4 max-w-2xl text-5xl font-semibold leading-[0.94] tracking-normal sm:text-6xl">
          Linee pulite, presenza decisa.
        </h4>
        <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600">
          Una pagina iniziale minimale per presentare capi, scarpe e accessori
          con ritmo editoriale e acquisto immediato.
        </p>
      </div>

      <div className="relative min-h-[260px] overflow-hidden rounded-lg bg-neutral-100">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8f8f6_0%,#e8e3dc_52%,#161616_52%,#161616_100%)]" />
        <div className="absolute left-7 top-7 h-40 w-24 rounded-t-full bg-white shadow-[0_28px_60px_rgba(0,0,0,0.18)]" />
        <div className="absolute left-11 top-16 h-28 w-16 rounded-md bg-neutral-950" />
        <div className="absolute bottom-8 right-7 h-16 w-40 rounded-full bg-white shadow-[0_22px_44px_rgba(0,0,0,0.2)]" />
        <div className="absolute bottom-12 right-11 h-8 w-32 rounded-full border border-neutral-950/20" />
        <div className="absolute bottom-6 left-7 rounded-md bg-white/90 px-3 py-2 text-xs font-medium text-neutral-950 backdrop-blur">
          Editoriale / acquisto rapido
        </div>
      </div>
    </section>
  );
}

function CategoryMenu({
  selectedCategory,
  menuOpen,
  setMenuOpen,
  onSelect
}: {
  selectedCategory: Category;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  onSelect: (category: Category) => void;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex w-full items-center justify-between gap-4 rounded-md border border-neutral-200 bg-white px-4 py-3 text-sm font-medium shadow-[0_10px_30px_rgba(15,15,15,0.05)] transition-colors hover:bg-neutral-50 sm:w-64"
        aria-expanded={menuOpen}
      >
        <span className="flex items-center gap-2">
          <SlidersHorizontal aria-hidden="true" className="h-4 w-4" />
          {selectedCategory}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "h-4 w-4 transition-transform",
            menuOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute right-0 z-20 mt-2 w-full overflow-hidden rounded-md border border-neutral-200 bg-white shadow-[0_24px_70px_rgba(15,15,15,0.14)] sm:w-64"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => onSelect(category)}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-colors hover:bg-neutral-50"
              >
                {category}
                {selectedCategory === category && (
                  <Check aria-hidden="true" className="h-4 w-4" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TopSellerCard({
  product,
  onQuickView
}: {
  product: Product;
  onQuickView: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onQuickView}
      className="group rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-left transition-colors hover:bg-white"
    >
      <div className="flex items-center gap-3">
        <ProductVisual product={product} compact />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{product.name}</p>
          <p className="mt-1 text-sm text-neutral-500">{formatPrice(product.price)}</p>
        </div>
      </div>
    </button>
  );
}

function ProductCard({
  product,
  shouldReduceMotion,
  onAdd,
  onQuickView
}: {
  product: Product;
  shouldReduceMotion: boolean | null;
  onAdd: () => void;
  onQuickView: () => void;
}) {
  return (
    <motion.article
      layout
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className="group overflow-hidden rounded-lg border border-neutral-200 bg-white"
    >
      <button
        type="button"
        onClick={onQuickView}
        className="block w-full text-left"
        aria-label={`Apri vista rapida per ${product.name}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
          <ProductVisual product={product} />
          <div className="absolute right-3 top-3 rounded-full bg-white/90 p-2 opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
            <Eye aria-hidden="true" className="h-4 w-4" />
          </div>
        </div>
      </button>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h5 className="text-base font-semibold">{product.name}</h5>
            <p className="mt-1 text-sm text-neutral-500">{product.category}</p>
          </div>
          <p className="text-sm font-semibold">{formatPrice(product.price)}</p>
        </div>
        <button
          type="button"
          onClick={onAdd}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-neutral-950 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          <Plus aria-hidden="true" className="h-4 w-4" />
          Aggiungi
        </button>
      </div>
    </motion.article>
  );
}

function MiniCart({
  cartItems,
  cartTotal,
  onAdd,
  onRemove
}: {
  cartItems: CartItem[];
  cartTotal: number;
  onAdd: (product: Product) => void;
  onRemove: (productId: string) => void;
}) {
  return (
    <aside className="border-t border-neutral-200 bg-neutral-50 p-4 sm:p-6 lg:border-l lg:border-t-0">
      <div className="sticky top-20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Carrello
            </p>
            <h4 className="mt-2 text-xl font-semibold">Anteprima ordine</h4>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-950 text-white">
            <ShoppingBag aria-hidden="true" className="h-4 w-4" />
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {cartItems.length === 0 ? (
            <div className="rounded-lg border border-dashed border-neutral-300 bg-white p-5 text-sm leading-6 text-neutral-500">
              Aggiungi un prodotto per vedere il riepilogo del carrello.
            </div>
          ) : (
            cartItems.map((item) => {
              const product = products.find((entry) => entry.id === item.productId);

              if (!product) {
                return null;
              }

              return (
                <div
                  key={item.productId}
                  className="rounded-lg border border-neutral-200 bg-white p-3"
                >
                  <div className="flex gap-3">
                    <ProductVisual product={product} compact />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold">{product.name}</p>
                      <p className="mt-1 text-sm text-neutral-500">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center rounded-md border border-neutral-200">
                      <button
                        type="button"
                        onClick={() => onRemove(product.id)}
                        className="p-2 text-neutral-600 hover:text-neutral-950"
                        aria-label={`Rimuovi ${product.name}`}
                      >
                        <Minus aria-hidden="true" className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onAdd(product)}
                        className="p-2 text-neutral-600 hover:text-neutral-950"
                        aria-label={`Aggiungi ${product.name}`}
                      >
                        <Plus aria-hidden="true" className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm font-semibold">
                      {formatPrice(product.price * item.quantity)}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="mt-5 rounded-lg bg-neutral-950 p-4 text-white">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/60">Totale simulato</span>
            <span className="text-xl font-semibold">{formatPrice(cartTotal)}</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-white/60">
            Nessun pagamento reale: il carrello mostra solo il comportamento del
            prototipo.
          </p>
        </div>
      </div>
    </aside>
  );
}

function ProductModal({
  product,
  shouldReduceMotion,
  onClose,
  onAdd
}: {
  product: Product | null;
  shouldReduceMotion: boolean | null;
  onClose: () => void;
  onAdd: (product: Product) => void;
}) {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end bg-black/40 p-3 backdrop-blur-sm sm:items-center sm:justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`Vista rapida ${product.name}`}
        >
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="max-h-[92vh] w-full max-w-4xl overflow-auto rounded-lg bg-white text-neutral-950 shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
          >
            <div className="grid md:grid-cols-2">
              <div className="min-h-[360px] bg-neutral-100">
                <ProductVisual product={product} featured />
              </div>
              <div className="p-5 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                      {product.category}
                    </p>
                    <h4 className="mt-3 text-3xl font-semibold">{product.name}</h4>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full border border-neutral-200 p-2 transition-colors hover:bg-neutral-50"
                    aria-label="Chiudi vista rapida"
                  >
                    <X aria-hidden="true" className="h-4 w-4" />
                  </button>
                </div>

                <p className="mt-4 text-2xl font-semibold">
                  {formatPrice(product.price)}
                </p>
                <p className="mt-5 text-base leading-7 text-neutral-600">
                  {product.description}
                </p>

                <dl className="mt-6 grid gap-3 border-y border-neutral-200 py-5 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-neutral-500">Materiale</dt>
                    <dd className="font-medium">{product.material}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-neutral-500">Colore</dt>
                    <dd className="font-medium">{product.tone}</dd>
                  </div>
                </dl>

                <Button
                  type="button"
                  size="lg"
                  onClick={() => onAdd(product)}
                  className="mt-6 w-full bg-neutral-950 text-white shadow-none hover:bg-neutral-800"
                >
                  <Plus aria-hidden="true" />
                  Aggiungi al carrello
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProductVisual({
  product,
  compact = false,
  featured = false
}: {
  product: Product;
  compact?: boolean;
  featured?: boolean;
}) {
  const size = compact
    ? "h-16 w-16"
    : featured
      ? "h-full min-h-[360px] w-full"
      : "h-full w-full";

  return (
    <div className={cn("relative overflow-hidden bg-neutral-100", size)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(255,255,255,0.92),transparent_30%),linear-gradient(145deg,#f8f8f6_0%,#ebe7df_100%)]" />
      <ProductShape product={product} compact={compact} featured={featured} />
    </div>
  );
}

function ProductShape({
  product,
  compact,
  featured
}: {
  product: Product;
  compact: boolean;
  featured: boolean;
}) {
  const scale = compact ? "scale-50" : featured ? "scale-110" : "scale-90";

  if (product.visual === "shoe") {
    return (
      <div className={cn("absolute inset-0 flex items-center justify-center", scale)}>
        <div className="relative h-28 w-48">
          <div className="absolute bottom-6 left-4 h-12 w-36 rounded-full bg-[#f7f1e7] shadow-[0_22px_38px_rgba(0,0,0,0.18)]" />
          <div className="absolute bottom-5 left-20 h-10 w-24 rounded-r-full bg-white" />
          <div className="absolute bottom-4 left-2 h-4 w-44 rounded-full bg-neutral-950" />
        </div>
      </div>
    );
  }

  if (product.visual === "shirt") {
    return (
      <div className={cn("absolute inset-0 flex items-center justify-center", scale)}>
        <div className="relative h-44 w-44">
          <div className="absolute left-8 top-6 h-28 w-28 rounded-t-lg bg-white shadow-[0_24px_50px_rgba(0,0,0,0.16)]" />
          <div className="absolute left-3 top-12 h-20 w-12 rotate-[-18deg] rounded-md bg-white" />
          <div className="absolute right-3 top-12 h-20 w-12 rotate-[18deg] rounded-md bg-white" />
          <div className="absolute left-[72px] top-8 h-7 w-10 rounded-b-full border-b border-neutral-300" />
        </div>
      </div>
    );
  }

  if (product.visual === "hoodie") {
    return (
      <div className={cn("absolute inset-0 flex items-center justify-center", scale)}>
        <div className="relative h-48 w-44">
          <div className="absolute left-11 top-2 h-20 w-[5.5rem] rounded-t-full bg-neutral-300" />
          <div className="absolute left-7 top-16 h-28 w-32 rounded-lg bg-neutral-400 shadow-[0_24px_50px_rgba(0,0,0,0.16)]" />
          <div className="absolute left-3 top-[5.75rem] h-24 w-10 rotate-[10deg] rounded-md bg-neutral-400" />
          <div className="absolute right-3 top-[5.75rem] h-24 w-10 rotate-[-10deg] rounded-md bg-neutral-400" />
        </div>
      </div>
    );
  }

  if (product.visual === "cap") {
    return (
      <div className={cn("absolute inset-0 flex items-center justify-center", scale)}>
        <div className="relative h-36 w-44">
          <div className="absolute left-12 top-12 h-20 w-28 rounded-t-full bg-neutral-950 shadow-[0_24px_50px_rgba(0,0,0,0.22)]" />
          <div className="absolute bottom-6 left-24 h-8 w-24 rounded-full bg-neutral-900" />
        </div>
      </div>
    );
  }

  if (product.visual === "pants") {
    return (
      <div className={cn("absolute inset-0 flex items-center justify-center", scale)}>
        <div className="relative h-48 w-40">
          <div className="absolute left-8 top-3 h-8 w-24 rounded-md bg-[#d9c7a8]" />
          <div className="absolute left-8 top-10 h-32 w-11 rounded-b-md bg-[#c9b38f] shadow-[0_24px_50px_rgba(0,0,0,0.16)]" />
          <div className="absolute right-8 top-10 h-32 w-11 rounded-b-md bg-[#d6c09a] shadow-[0_24px_50px_rgba(0,0,0,0.12)]" />
        </div>
      </div>
    );
  }

  if (product.visual === "bag") {
    return (
      <div className={cn("absolute inset-0 flex items-center justify-center", scale)}>
        <div className="relative h-40 w-44">
          <div className="absolute left-10 top-14 h-24 w-28 rounded-lg bg-[#efe4d4] shadow-[0_24px_50px_rgba(0,0,0,0.16)]" />
          <div className="absolute left-16 top-7 h-20 w-16 rounded-full border-4 border-[#d9c9b3]" />
        </div>
      </div>
    );
  }

  if (product.visual === "sunglasses") {
    return (
      <div className={cn("absolute inset-0 flex items-center justify-center", scale)}>
        <div className="relative h-28 w-52">
          <div className="absolute left-5 top-8 h-16 w-20 rounded-full bg-neutral-950 shadow-[0_24px_50px_rgba(0,0,0,0.2)]" />
          <div className="absolute right-5 top-8 h-16 w-20 rounded-full bg-neutral-950 shadow-[0_24px_50px_rgba(0,0,0,0.2)]" />
          <div className="absolute left-24 top-16 h-1 w-8 bg-neutral-950" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("absolute inset-0 flex items-center justify-center", scale)}>
      <div className="relative h-52 w-44">
        <div className="absolute left-7 top-4 h-28 w-[7.5rem] rounded-lg bg-neutral-950 shadow-[0_24px_50px_rgba(0,0,0,0.18)]" />
        <div className="absolute left-3 top-[3.75rem] h-24 w-10 rotate-[10deg] rounded-md bg-neutral-950" />
        <div className="absolute right-3 top-[3.75rem] h-24 w-10 rotate-[-10deg] rounded-md bg-neutral-950" />
        <div className="absolute left-10 top-[7.75rem] h-28 w-11 rounded-b-md bg-neutral-900" />
        <div className="absolute right-10 top-[7.75rem] h-28 w-11 rounded-b-md bg-neutral-800" />
      </div>
    </div>
  );
}

function formatPrice(price: number) {
  return `\u20ac${price}`;
}
