import Image from "next/image";

export default function Map() {
  return (
    <div>
      <div
        style={{
          font: "normal normal 400 12px/normal dotum, sans-serif",
          width: 640,
          height: 512,
          color: "#333",
          position: "relative",
          margin: "auto",
        }}
      >
        <div style={{ height: 480 }}>
          <a
            href="https://map.kakao.com/?urlX=429755.0&urlY=1105258.0&itemId=814683449&q=%EC%A3%BC%EC%95%88BT%EC%84%BC%ED%84%B02%EC%B0%A8&srcid=814683449&map_type=TYPE_MAP&from=roughmap"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="map"
              alt="map"
              src="http://t1.daumcdn.net/roughmap/imgmap/49010912c924dfe5b08f3e740915d7591d4df0f2847faf423efe2d656bf1a01e"
              style={{ border: "1px solid #ccc" }}
              width={638}
              height={478}
            />
          </a>
        </div>
        <div
          style={{
            overflow: "hidden",
            padding: "7px 11px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "0px 0px 2px 2px",
            backgroundColor: "rgb(249, 249, 249)",
          }}
        >
          <a
            href="https://map.kakao.com"
            target="_blank"
            rel="noreferrer"
            style={{ float: "left" }}
          >
            <Image
              src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
              alt="카카오맵"
              style={{ display: "block", width: 72, height: 16 }}
              width={72}
              height={16}
            />
          </a>
          <div
            style={{
              float: "right",
              position: "relative",
              top: 1,
              fontSize: 11,
            }}
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://map.kakao.com/?from=roughmap&srcid=814683449&confirmid=814683449&q=%EC%A3%BC%EC%95%88BT%EC%84%BC%ED%84%B02%EC%B0%A8&rv=on"
              style={{
                float: "left",
                height: 15,
                paddingTop: 1,
                lineHeight: 15,
                color: "#000",
                textDecoration: "none",
              }}
            >
              로드뷰
            </a>
            <span
              style={{
                width: 1,
                padding: 0,
                margin: "0 8px 0 9px",
                height: 11,
                verticalAlign: "top",
                position: "relative",
                top: 2,
                borderLeft: "1px solid #d0d0d0",
                float: "left",
              }}
            />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://map.kakao.com/?from=roughmap&eName=%EC%A3%BC%EC%95%88BT%EC%84%BC%ED%84%B02%EC%B0%A8&eX=429755.0&eY=1105258.0"
              style={{
                float: "left",
                height: 15,
                paddingTop: 1,
                lineHeight: 15,
                color: "#000",
                textDecoration: "none",
              }}
            >
              길찾기
            </a>
            <span
              style={{
                width: 1,
                padding: 0,
                margin: "0 8px 0 9px",
                height: 11,
                verticalAlign: "top",
                position: "relative",
                top: 2,
                borderLeft: "1px solid #d0d0d0",
                float: "left",
              }}
            />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://map.kakao.com?map_type=TYPE_MAP&from=roughmap&srcid=814683449&itemId=814683449&q=%EC%A3%BC%EC%95%88BT%EC%84%BC%ED%84%B02%EC%B0%A8&urlX=429755.0&urlY=1105258.0"
              style={{
                float: "left",
                height: 15,
                paddingTop: 1,
                lineHeight: 15,
                color: "#000",
                textDecoration: "none",
              }}
            >
              지도 크게 보기
            </a>
          </div>
        </div>
      </div>

      {/* <div
        style={{
          font: "normal normal 400 12px/normal dotum, sans-serif",
          width: "640px",
          height: "392px",
          color: "#333",
          position: "relative",
        }}
      >
        <div style={{ height: "360px" }}>
          <a
            href="https://map.kakao.com/?urlX=429755.0&amp;urlY=1105258.0&amp;itemId=814683449&amp;q=%EC%A3%BC%EC%95%88BT%EC%84%BC%ED%84%B02%EC%B0%A8&amp;srcid=814683449&amp;map_type=TYPE_MAP&amp;from=roughmap"
            target="_blank"
          >
            <img
              className="map"
              src="http://t1.daumcdn.net/roughmap/imgmap/594cb3c6c8e71c8a818726c7a16f9d543fe36e0a0f3baed3c63ecbbd9b607e9a"
              style={{ border: "1px solid #ccc" }}
              width="638px"
              height="358px"
            />
          </a>
        </div>
        <div
          style={{
            overflow: "hidden",
            padding: "7px 11px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "0px 0px 2px 2px",
            backgroundColor: "rgb(249, 249, 249)",
          }}
        >
          <a
            href="https://map.kakao.com"
            target="_blank"
            style={{ float: "left" }}
          >
            <img
              src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
              alt="카카오맵"
              style={{ display: "block", width: "72px", height: "16px" }}
              width="72"
              height="16"
            />
          </a>
          <div
            style={{
              float: "right",
              position: "relative",
              top: "1px",
              fontSize: "11px",
            }}
          >
            <a
              target="_blank"
              href="https://map.kakao.com/?from=roughmap&amp;srcid=814683449&amp;confirmid=814683449&amp;q=%EC%A3%BC%EC%95%88BT%EC%84%BC%ED%84%B02%EC%B0%A8&amp;rv=on"
              style={{
                float: "left",
                height: "15px",
                paddingTop: "1px",
                lineHeight: "15px",
                color: "#000",
                textDecoration: "none",
              }}
            >
              로드뷰
            </a>
            <span
              style={{
                width: "1px",
                padding: "0",
                margin: "0 8px 0 9px",
                height: "11px",
                verticalAlign: "top",
                position: "relative",
                top: "2px",
                borderLeft: "1px solid #d0d0d0",
                float: "left",
              }}
            ></span>
            <a
              target="_blank"
              href="https://map.kakao.com/?from=roughmap&amp;eName=%EC%A3%BC%EC%95%88BT%EC%84%BC%ED%84%B02%EC%B0%A8&amp;eX=429755.0&amp;eY=1105258.0"
              style={{
                float: "left",
                height: "15px",
                paddingTop: "1px",
                lineHeight: "15px",
                color: "#000",
                textDecoration: "none",
              }}
            >
              길찾기
            </a>
            <span
              style={{
                width: "1px",
                padding: "0",
                margin: "0 8px 0 9px",
                height: "11px",
                verticalAlign: "top",
                position: "relative",
                top: "2px",
                borderLeft: "1px solid #d0d0d0",
                float: "left",
              }}
            ></span>
            <a
              target="_blank"
              href="https://map.kakao.com?map_type=TYPE_MAP&amp;from=roughmap&amp;srcid=814683449&amp;itemId=814683449&amp;q=%EC%A3%BC%EC%95%88BT%EC%84%BC%ED%84%B02%EC%B0%A8&amp;urlX=429755.0&amp;urlY=1105258.0"
              style={{
                float: "left",
                height: "15px",
                paddingTop: "1px",
                lineHeight: "15px",
                color: "#000",
                textDecoration: "none",
              }}
            >
              지도 크게 보기
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
}
