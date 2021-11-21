import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Sorting: NextPage = () => {
  // Problem 1 [12, 1, 45, 5, 9]
  const numberArray = [12, 1, 45, 5, 9];

  // sort the numbers
  const sortNums = () => {
    /* sort the array, where from sort method
     * we get access to two parameters
     * a and b, then we take a from b, which are the indexes of the array
     * thus the lowest number in the array will carry over and move to the left i.e [1,6,3],
     *  1 will remain where it is, 6 will be comparied to 3, then since 3 is less then 6, 3 will be placed after 6
     * this function will continue until no numbers are misplaced
     */

    const sortedArray = numberArray.sort((a, b) => a - b);
    // console.log("Sorted Array ", sortedArray);
  };

  sortNums();

  return <></>;
};

export default Sorting;
