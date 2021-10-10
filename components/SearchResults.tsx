import { useMemo } from "react";
import { ProductItem } from "./ProductItem";
interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      <h2>{totalPrice}</h2>
      {results.map((product) => {
        return <ProductItem product={product} key={product.id} />;
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
 */
