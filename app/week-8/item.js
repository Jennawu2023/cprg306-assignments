
export default function Item({name, quantity, category, onSelect}) {
 
  return (
      <li
      className="p-4 mb-4 ml-8 rounded-md shadow-md text-white bg-slate-800 max-w-sm hover:bg-orange-800 cursor-pointer"
      onClick={onSelect}
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="text-sm">
        Buy {quantity} in {category}
      </div>
    </li>
    );
}