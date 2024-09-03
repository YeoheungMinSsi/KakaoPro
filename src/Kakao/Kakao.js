import { useRef, useEffect, useState} from "react";
// import { Map } from "react-kakao-maps-sdk"
import useKakaoLoader from "./component/useKakaoLoader"
import "./css/index.css"

const { kakao } = window;

function Kakao() {

    const mapRef = useRef(null);
    const [latLng, setLngLng] = useState({lat:35.14545938868267, lng:129.0084602414237});

    const getInfo = () => {
        const map = mapRef.current
        if (!map) return;

        kakao.maps.event.addListener(map, 'dragend', function() {

            const latLng = map.getCenter();
            const lat = latLng.getLat();
            const lng = latLng.getLng();

            setLngLng({lat, lng});
        });

    };

    useEffect(() => {
        const container = document.getElementById("map");
        const options = {
            center: new kakao.maps.LatLng(latLng.lat, latLng.lng),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
        mapRef.current = map;

        getInfo();
        // const initialInfo = getInfo()
        // if(initialInfo){
        //     setInfo(initialInfo)
        // }

    }, []);

    // console.log(info.lat, info.lng);

    useEffect(() => {

    }, []);

    useKakaoLoader()

    return (
        <>
            <div id={"map"}>
                <div>
                    지도의 현재 위도 : {latLng.lat} <br/>
                    지도의 현재 경도 : {latLng.lng}
                </div>
            </div>
        </>
    )
}

export default Kakao;