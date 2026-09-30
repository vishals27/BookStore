import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import axios from "axios";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Course() {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get(`${API_BASE_URL}/book`);
                const paidBook = res.data.filter(data => data.category === "Paid");
                setBook(paidBook);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, []);

    return (
        <>
            <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl  md:text-4xl">
                        We're delighted to have you{" "}
                        <span className="text-pink-500"> Here! :)</span>
                    </h1>
                    <p className="mt-12">
                        Welcome to our exclusive collection of premium books and courses. Whether you are looking to master new professional skills, explore creative passions, or immerse yourself in fascinating subjects, our carefully curated library offers something valuable for every learner. Expand your horizons, achieve your personal and career goals, and take your knowledge to the next level with our comprehensive learning materials.
                    </p>
                    <Link to="/">
                        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>

                    </Link>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
                    {book.map((item) => (
                        <Cards key={item.id} item={item} />
                    ))}
                </div>

            </div >
        </>

    )
}
export default Course;