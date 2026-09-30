import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://backend-bookstore-runa.onrender.com";
function Freebook() {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get(`${API_BASE_URL}/book`);
                const data = res.data.filter((data) => data.category === "Free");
                setBook(data);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, []);

    const SliderComponent = Slider.default || Slider;
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div>
                    <h1 className="text-2xl font-bold pb-2" >Free Offered Courses</h1>
                    <p >Explore our specially curated selection of free books and courses designed to help you gain new knowledge and insights without any cost. Start reading and learning today!</p>
                </div>


                <div>
                    <SliderComponent {...settings}>
                        {
                            book.map((item) => {
                                return (<Cards item={item} key={item.id} />)
                            })
                        }

                    </SliderComponent>
                </div>

            </div>

        </>
    )
}

export default Freebook;