# Products
This application is a backend server for an ecommerce site that replaced the previous backend, decreasing response time and query speed.

## Install
```
npm install
```
## Run the App
```
npm start
```
# API Endpoints

All Queries take parameters as Query strings unless it is in the endpoint\
All responses should return status code `200 OK`

### `GET /products`
Retrieve a list of products

#### Parameters
| Parameter | Type    | Description                                               |
|-----------|---------|-----------------------------------------------------------|
| page      | Integer | Selects the page of results to return. Default 1.         |
| page_size | Integer | Specifies how many results per page to return. Default 10.|

#### Response
```json
[
    {
        "id": 1,
        "name": "Camo Onesie",
        "slogan": "Blend in to your crowd",
        "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        "category": "Jackets",
        "default_price": 140
    },
    {
        "id": 2,
        "name": "Bright Future Sunglasses",
        "slogan": "You've got to wear shades",
        "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
        "category": "Accessories",
        "default_price": 69
    },
    {
        "id": 3,
        "name": "Morning Joggers",
        "slogan": "Make yourself a morning person",
        "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
        "category": "Pants",
        "default_price": 40
    }
]
```

### `GET /products/:product_id`
Returns all product level information for a specified product id.

#### Parameters
| Parameter  | Type    | Description                                       |
|------------|---------|---------------------------------------------------|
| product_id | Integer | Selects the page of results to return. Default 1. |

#### Response
```json
{
    "id": 1,
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": 140,
    "features": [
        {
            "feature": "Buttons",
            "value": "Brass"
        },
        {
            "feature": "Fabric",
            "value": "Canvas"
        }
    ]
}
```

### `GET /products/:product_id/styles`
Returns the all styles available for the given product.

#### Parameters
| Parameter  | Type    | Description                                       |
|------------|---------|---------------------------------------------------|
| product_id | Integer | Selects the page of results to return. Default 1. |

#### Response
```json
{
    "product_id": "1",
    "results": [
        {
            "style_id": 1,
            "name": "Forest Green & Black",
            "original_price": 140,
            "sale_price": null,
            "default?": true,
            "photos": [
                {
                    "url": "placeholder/image.jpg",
                    "thumbnail_url": "placeholder/image_thumbnail.jpg"
                },
                {
                    "url": "placeholder/image.jpg",
                    "thumbnail_url": "placeholder/image_thumbnail.jpg"
                }
            ],
            "skus": {
                "1": {
                    "quantity": 8,
                    "size": "XS"
                },
                "2": {
                    "quantity": 16,
                    "size": "S"
                }
            }
        },
        {
            "style_id": 2,
            "name": "Desert Brown & Tan",
            "original_price": 140,
            "sale_price": null,
            "default?": false,
            "photos": [
                {
                    "url": "placeholder/image.jpg",
                    "thumbnail_url": "placeholder/image_thumbnail.jpg"
                },
                {
                    "url": "placeholder/image.jpg",
                    "thumbnail_url": "placeholder/image_thumbnail.jpg"
                }
            ],
            "skus": {
                "7": {
                    "quantity": 16,
                    "size": "S"
                },
                "8": {
                    "quantity": 8,
                    "size": "XS"
                }
            }
        }
    ]
}
```

### `GET /products/:product_id/related`
Returns the id's of products related to the product specified.

#### Parameters
| Parameter  | Type    | Description                                       |
|------------|---------|---------------------------------------------------|
| product_id | Integer | Selects the page of results to return. Default 1. |

#### Response
```json
[
  2,
  3,
  8,
  7
]
```
