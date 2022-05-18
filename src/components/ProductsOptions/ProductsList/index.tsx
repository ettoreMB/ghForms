import { InputText } from "../../formComponents/inputText"

const products = [
  {
    title: 'Hip, Pelvis, Extremities',
    products: [
      {
        info: "Plates & Screws for hip or pelvis",
        name: ""
      },
      {
        info: "Plates & Screws inferior extremities",
        name: ""
      },
      {
        info: "Plates & Screws superior extremities",
        name: ""
      }
    ]
  },
  {
    title: 'Shoulder, Hip, Femur, Tibia',
    products: [
      {
        info: "Humeral Intramedullary nails",
        name: ""
      },
      {
        info: "Cephalomedular Intramedullary nails ",
        name: ""
      },
      {
        info: "Femoral Intramedullary nails",
        name: ""
      },
      {
        info: "Tibial Intramedullary nails",
        name: ""
      },
    ]
  },
  {
    title: 'Shoulder, Hip, Femur, Tibia',
    products: [
      {
        info: "Small, cannulated screws",
        name: ""
      },
      {
        info: "Large, cannulated screws",
        name: ""
      },
    ]
  },
  {
    title: 'Shoulder, Femur, Tibia, forearm, hand',
    products: [
      {
        info: "Small, cannulated screws",
        name: ""
      },
      {
        info: "Large, cannulated screws ",
        name: ""
      },
    ]
  },
]

export function ProductsList() {
  return (
    <>
      {products.map((product) => {
        return (
          <div className="mb-6">
            <h3 className="font-bold">{product.title}:</h3>
            {product.products.map(item => {
              return (
                <>
                  <div className="flex flex-row w-6/12 mb-4 align-center">
                    <h3 className="pt-3">{item.info}</h3>
                    <InputText type="text" placeholder={'product name | Brand'} />
                  </div>

                </>
              )
            })}
          </div>
        )
      })}
    </>
  )
}