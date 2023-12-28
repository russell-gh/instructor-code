import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBarResults.scss";
import { formatPriceInPounds } from "../../utils/currencyUtils";
import { findLowest } from "../../utils/sortSearchResults";
import { capitaliseFirstLetter } from "../../utils/capitaliseFirstLetter";

function SearchResults({ searchResults }) {
  const navigate = useNavigate();
  const handleResultClick = (sku) => {
    navigate(`/product/${sku}`);
  };

  return (
    <div>
      {searchResults.map((product) => {
        const lowest = findLowest(product.simplified.price_info);

        const imageUrl = `${product.simplified.image}`;
        const {
          asda,
          tesco,
          morrisons,
          waitrose,
          sainsburys,
          iceland,
          aldi,
          ocado,
        } = product.simplified.price_info;
        const newPrices = [];
        for (const key in product.simplified.price_info) {
          const copy = { ...product.simplified.price_info[key] };
          copy.name = key;
          copy.price = formatPriceInPounds(
            product.simplified.price_info[key].price
          );

          newPrices.push(copy);
        }

        return (
          <div
            key={product.simplified.sku_id}
            onClick={() => handleResultClick(product.simplified.sku_id)}
            className="search-result"
          >
            <img
              src={imageUrl}
              alt={product.simplified.name}
              className="search-result-image"
            />
            <div className="text-results">
              <p className="search-result-name">{product.simplified.name}</p>
              <p className="brand">Brand: {product.simplified.brand}</p>
              <div>
                {newPrices.map((price) => {
                  const standardizedUnitMeasure =
                    price.unit_measure &&
                    price.unit_measure.replace(
                      /ltr|liter|litrer|1 litre|lt/gi,
                      "litre"
                    );

                  const unitPriceInPounds = (price.unit_price / 100).toFixed(2);

                  return (
                    <p
                      key={price.name}
                      className={`${capitaliseFirstLetter(price.name)} ${
                        price.unit_price === lowest ? "lowest" : "not-lowest"
                      }`}
                    >
                      <span className="store-name">
                        {capitaliseFirstLetter(price.name)}{" "}
                      </span>
                      <span className="store-price">£{price.price}</span>{" "}
                      <span className="unit-price-measure">
                        (£{unitPriceInPounds}/{standardizedUnitMeasure})
                      </span>
                      {price.unit_price === lowest && (
                        <span className="best-price"> Best Price</span>
                      )}
                    </p>
                  );
                })}
              </div>
            </div>
            {/* Add more details you want to display */}
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
