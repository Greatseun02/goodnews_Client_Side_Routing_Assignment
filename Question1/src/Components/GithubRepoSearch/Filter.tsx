import type { setState } from '../../utils/types';
import Select from './Select';



type filterProps = {
    queryInput: string;
    setQueryInput: setState<string>;
    numberOfItems: string;
    setNumberOfItems: setState<string>;
    sortResult: string;
    setSortResult: setState<string>;
    order: string;
    setOrder: setState<string>;
}

const sortOptions = [
    {value:"best-match", label:"Best match"},
    {value:"stars", label:"Stars"}, 
    {value:"updated", label:"Most recently updated"}
]

const orders = [
  {value:"desc", label:"Descending"}, {value:"asc", label:"Ascending"}
]

const itemsPerPage = [
  {value:"10", label: "10"}, {value:"20", label:"20"}, {value:"50", label:"50"}
]


export default function Filter({queryInput, setQueryInput, numberOfItems, setNumberOfItems, sortResult, setSortResult, order, setOrder}: filterProps) {
  return (
    <div className='filter-container'>
        <input value={queryInput} onChange={(e)=>setQueryInput(e.target.value)}/>
        <div className='filter'>
            <Select selectedValue={numberOfItems} setSelectedValue={setNumberOfItems} options={itemsPerPage} title="Items per page"/>
            <Select selectedValue={order} setSelectedValue={setOrder} options={orders} title="Order"/>
            <Select selectedValue={sortResult} setSelectedValue={setSortResult} options={sortOptions} title="Sort by"/>
        
        </div>
    </div>
  )
}
