SELECT (
  'product_id', ${productId},
  'results',
  json_agg(
        json_build_object(
          'style_id', styles.id,
          'name', styles.name,
          'original_price', styles.original_price,
          'sale_price', styles.sale_price,
          'default?', styles.default_style,
          'photos', (SELECT json_agg(json_build_object(
            'thumbnail_url', photos.thumbnail_url,
            'url', photos.url
          )) AS photos FROM photos WHERE photos.style_id=styles.id),
          'skus', (SELECT json_object_agg(
            skus.id, json_build_object(
              'quantity', skus.quantity,
              'size', skus.size
            )
          ) AS skus FROM skus WHERE skus.style_id=styles.id)
        )
      ) FROM styles WHERE product_id=${productId}
)