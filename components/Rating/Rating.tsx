import React, {KeyboardEventHandler, useEffect, useState} from 'react';
import {RatingProps} from "./Rating.props";
import styles from './Rating.module.css';
import cn from "classnames";
import Star from './star.svg';

const Rating = ({isEditable=false, rating, setRating, ...props}: RatingProps): JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRaing(rating);
    }, [rating]);

    const constructRaing = (currentRating: number) => {
        const updatedArray = ratingArray.map((e, i) => (
            <span
                className={cn(styles.star, {
                    [styles.filled]: i < currentRating,
                    [styles.editable]: isEditable,
                })}
                onMouseEnter={()=> changeDisplay(i+1)}
                onMouseLeave={()=> changeDisplay(rating)}
                onClick={() => onClick(i+1)}
            >
                <Star
                    tabindex={isEditable? 0 : -1}
                    onKeyDown={(e) => handleSpace(e, i+1)}
                />
            </span>
        ));
        setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
        if(!isEditable) {
            return;
        }
        constructRaing(i);
    };
    const onClick = (i: number) => {
        if(!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleSpace = (e, i: number) => {
        if(e.code != 'Space' || !setRating) {
            return
        }
        setRating(i)
    }
    return (
        <div {...props}>
            {ratingArray.map((e, i) => <span key={i}>{e}</span>)}
        </div>
    )
};

export default Rating;