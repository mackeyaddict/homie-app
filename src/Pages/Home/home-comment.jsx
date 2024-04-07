import CardComment from "../../Components/Cards/card-comment";
import CoffeeBean2 from "../../assets/Img/coffee-bean-2.png"

export default function HomeComment() {
  const comments = [
    {
      id: 1,
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Alice",
      date: "March 25, 2024",
      comment: "This is a great website! I love the design and the content.",
    },
    {
      id: 2,
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Bob",
      date: "March 26, 2024",
      comment: "The coffee selection is amazing. I've tried several blends and they're all delicious.",
    },
    {
      id: 3,
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Carol",
      date: "March 27, 2024",
      comment: "I'm impressed by the fast shipping! My order arrived sooner than expected.",
    },
    {
      id: 4,
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      name: "David",
      date: "March 28, 2024",
      comment: "I recently discovered this website, and I'm already hooked! Can't wait to try more coffee varieties.",
    },
  ];
  
  return(
    <section>
      <div className="container mx-auto flex flex-col gap-9 justify-center items-center py-14 relative">
        <div className="hidden md:flex absolute top-0 left-0 lg:left-[10%] max-w-24">
          <img src={CoffeeBean2} alt="" />
        </div>
        <div className="hidden md:flex absolute bottom-[10%] right-0 lg:right-[10%] max-w-24">
          <img src={CoffeeBean2} alt="" />
        </div>
        <h1 className="text-5xl font-bold text-center">What They Say About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 place-items-center px-6 py-14">
          {comments.map((comment, i) => (
            <CardComment key={i} avatar={comment.avatar} name={comment.name} date={comment.date} comment={comment.comment}/>
          ))}
        </div>
        <div className="bg-black h-5 w-[300px] rounded-xl"></div>
      </div>
    </section>
  )
}