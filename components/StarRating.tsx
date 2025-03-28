import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type StarRatingProps = {
    rate: string; // Example: "4.5/5"
};

const StarRating = ({ rate }: StarRatingProps) => {
    const maxStars = 5;
    const rating = parseFloat(rate.split("/")[0]); // Extract "4.5" from "4.5/5"

    return (
        <div className="flex text-yellow-500">
            {[...Array(maxStars)].map((_, i) => {
                const starIndex = i + 1;
                return rating >= starIndex ? (
                    <FaStar key={i} />
                ) : rating >= starIndex - 0.5 ? (
                    <FaStarHalfAlt key={i} />
                ) : (
                    <FaRegStar key={i} />
                );
            })}
        </div>
    );
};

export default StarRating;
