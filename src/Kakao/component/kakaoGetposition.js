//
// import {useEffect, useRef, useState} from "react";
// import useKakaoLoader from "../component/useKakaoLoader"
//
// const { kakao } = window;
//
// const mapRef = useRef(null);
// const [latLng, setLngLng] = useState({lat:33.450701, lng:126.570667});
//
// const getInfo = () => {
//     const map = mapRef.current
//     if (!map) return;
//
//     kakao.maps.event.addListener(map, 'dragend', function() {
//
//         const latLng = map.getCenter();
//         const lat = latLng.getLat();
//         const lng = latLng.getLng();
//
//          //상태 업데이트
//         setLngLng({lat, lng});
//     });
//
// };
//
// useEffect(() => {
//     const container = document.getElementById("map");
//     const options = {
//         center: new kakao.maps.LatLng(latLng.lat, latLng.lng),
//         level: 3
//     };
//     const map = new kakao.maps.Map(container, options);
//     mapRef.current = map;
//
//     getInfo(); //이벤트 리스너
//
// }, []);
//
// // console.log(info.lat, info.lng);
