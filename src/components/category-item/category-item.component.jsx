import "./category-item.styles.scss";
//const CategoryItem = ({category: {image, title}}) //destructure in function parameter
const CategoryItem = ({ category }) => {
    //Destructuring Inside Function Body
    const { imageUrl, title } = category;
    return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
export default CategoryItem;
