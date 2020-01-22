import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

export default function Burger(props) {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=> {
            console.log("[...Array(props.ingredients[igKey])] = " + Array(props.ingredients[igKey]))
            console.log("props.ingredients[igKey] = " + props.ingredients[igKey])
            console.log("igKey = " + igKey)
            console.log("props.ingredients = " + props.ingredients)
            return <BurgerIngredient key={igKey + i} type = {igKey}/>
        })
        .reduce((arr, el)=>{
            return arr.concat(el)
        }, []);
    });

    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    
    return (
        <div className = "Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}
