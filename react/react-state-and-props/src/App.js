import "./App.css";
import { useState } from "react";


export default function ShoppingMall() {
  return (
    <div>
      <h1>쇼핑몰</h1>
      <div className="flex">
        {/*  */}
        <GoodsListEntry
          name={"미국산 점보 체리"}
          price={"20000"}
          date={"7/12"}
        />
        <GoodsListEntry name={"국산 생물 재첩"} />
        <GoodsListEntry name={"천년수 무라벨"} />
        <GoodsListEntry name={"햄가득 부대전골"} />
      </div>
    </div>
  );
}

function GoodsListEntry(props) {
  console.log(props);
  return (
    <div className="entryContainer">
      <div>{props.name}</div>
      <div>{props.price}원</div>
      <div>{props.date} 새벽 도착 보장</div>
    </div>
  );
}