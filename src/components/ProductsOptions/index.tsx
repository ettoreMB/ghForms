import { CheckBoxTexReturn } from "./checkBoxTextReturn";
import { ProcedureList } from "./ProceduresList";
import { ProductsList } from "./ProductsList";

export function ProductsOptions() {
  return (
    <>
      {/* <ProductsOptions /> */}
      <ProcedureList />
      <CheckBoxTexReturn label="Target specialties: Orthopedic Surgeon, Trauma Surgeon " />
      <ProductsList />
    </>
  )
}