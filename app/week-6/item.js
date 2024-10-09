
export default function Item(props) {
    return (
      <section className="p-2 m-4 bg-neutral-800 max-w-sm">
        <h3 className="text-xl font-bold">{props.name}</h3>
        <div className="text-sm">
          <p>Quantity:{props.quantity}</p>
          <p>Category:{props.category}</p>
        </div>
        
      </section>
    );
  }