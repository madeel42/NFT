import React, { useEffect, useState } from 'react'
import {
  useParams
} from "react-router-dom";
export const Nftitem = () => {
  let { id } = useParams();
  const [data, setData] = useState()
  const [err, setErr] = useState('')
  useEffect(() => {
    handleSearch()
  })
  const handleSearch = () => {
    fetch("/getSearchData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ id }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.status) {
          setErr(res.status)
        } else {
          console.log(JSON.stringify(res), "Search result");
          delete res._id;
          setData(JSON.stringify(res))
        }

      })
  }
  return (
    <div>
      {data ? data : err}
    </div>
  )
}
