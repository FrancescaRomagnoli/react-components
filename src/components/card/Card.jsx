export default function Card() {
  return (
    <div className="card-row">
      <div className="card">
        <div className="card-header">
          <img
            src="../src/assets/img/600x400-placeholder.png"
            alt=""
            className="card-img"
          />
        </div>
        <div className="card-body">
          <h3>Titolo del post</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odio
            aliquam deserunt nihil quod. Eaque vel suscipit aut facere totam
            nemo voluptate sint numquam laudantium. Facere perferendis incidunt
            quam molestias!
          </p>
          <button>read more</button>
        </div>
      </div>
    </div>
  );
}
