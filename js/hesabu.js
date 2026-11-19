export function volume_sphere(r){
    let res = 4/3 * 22/7 * r**3
    return res
}


export default function surface_area_sphere(r){
    return 4 * 22/7 * r**2
}

export const area_circle = (r) => 22/7 * r**2

export const DAYS_OF_WEEK = ["Mon", "Tue"]

export function greet(){
    console.log("Hello")
}

//import {x as y}