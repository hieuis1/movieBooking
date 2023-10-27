import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "../App.css";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { booked } from "../redux/slice/chairSlice";
import { BsFillTrash3Fill } from "react-icons/bs";
import { deleteChair } from "../redux/slice/chairSlice";
const Book = () => {
  const disPatch = useDispatch();
  const chairList = useSelector((state) => state.chair.chairBooking);
  return (
    <div className="ticket">
      <h3>Danh sách ghế bạn đã chọn</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
          marginTop: 5,
        }}
        className="select"
      >
        <div className="select-bg"></div>
        <label htmlFor="">Ghế đang chọn</label>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
          marginTop: 5,
        }}
        className="notAllow"
      >
        <div className="notAllow-bg"></div>
        <label>Ghế đã đặt</label>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
          marginTop: 5,
        }}
        className="Allow"
      >
        <div className="Allow-bg"></div>
        <label>Ghế trống</label>
      </div>
      <Table className="mt-3 text-center" bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Số ghê</th>
            <th>Giá vé</th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody>
          {chairList.map((item, index) => {
            return (
              <tr onClick={() => disPatch(deleteChair(item))} key={index}>
                <th>{index + 1}</th>
                <th>{item.soGhe}</th>
                <th>{item.gia}</th>
                <th style={{ cursor: "pointer" }}>
                  <BsFillTrash3Fill color="red" />
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button
        onClick={() => disPatch(booked({ list: chairList }))}
        variant="primary"
      >
        Thanh toán
      </Button>{" "}
    </div>
  );
};

export default Book;
