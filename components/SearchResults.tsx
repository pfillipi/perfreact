import { useMemo } from "react";
import { ProductItem } from "./ProductItem";
interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({
  results,
  onAddToWishlist,
}: SearchResultsProps) {
  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishlist={onAddToWishlist}
          />
        );
      })}
    </div>
  );
}

/** 
  * 1. Lag en ny versjon av komponenten;
  * 2. Sammenlign med den fremre versjonen;
  * 3. Hvis det er endringer, oppdater dem.

*/

/**
 * Apply memo in the following situations:
 * 1. Pure Functional Components
 * 2. Renders too often
 * 3. Re-renders with same props
 * 4. Medium to big size
 */

/**
 * useMemo / useCallback
 *
 * 1. tunge beregninger
 * 2. referansemessing likestilling – når du sender denne informasjonen til den underordnede komponenten
 *
 * 3.
 */
