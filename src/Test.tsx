export default function Test() {
  return (
    <section className="mb-4">
      <h2 className="mb-6 font-bold">Please indicate which product categories are you familiar with and comfortable to speak about:</h2>
      <div>
        <div>
          <span>
            <label htmlFor="">1 Hip, Pelvis, Extremities</label>
            <input type="checkbox" onChange={handleChange} />
          </span>
        </div>
        {/* {proceduresCheck && (<ProductsOptions />)} */}
        {/* <div>
              <h3>2.	Hip, Pelvis, Extremities </h3>
              <label htmlFor="">Products (and representative example): </label>
              <div>
                <CheckBoxTexReturn label="Humeral Intramedullary nails" />
              </div>
              <div>
                <CheckBoxTexReturn label="Cephalomedular Intramedullary nails" />
              </div>
              <div>
                <CheckBoxTexReturn label="Femoral Intramedullary nails" />
              </div>
              <div>
                <CheckBoxTexReturn label="Tibial Intramedullary nails" />
              </div>
            </div>

            <div>
              <h3>3.Shoulder, Hip, Pelvis, Femur, Tibia, Extremities   </h3>
              <label htmlFor="">Products (and representative example): </label>
              <div>
                <CheckBoxTexReturn label="Small, cannulated screws " />
              </div>
              <div>
                <CheckBoxTexReturn label="Large, cannulated screws  " />
              </div>
            </div>

            <div>
              <h3>4.Shoulder, Femur, Tibia, forearm, hand</h3>
              <label htmlFor="">Products (and representative example): </label>
              <div>
                <CheckBoxTexReturn label="Small, cannulated screws " />
              </div>
              <div>
                <CheckBoxTexReturn label="Large, cannulated screws  " />
              </div>
            </div>
            */}
      </div>
    </section>
  )
}