'use client';
import { useEffect, useRef } from 'react';
import * as motion from 'framer-motion/client';
import styles from './Location.module.css';

interface Branch {
  id: number;
  name: string;
  address: string;
  tel: string;
  location: {
    lat: number;
    lng: number;
  };
}

const branches: Branch[] = [
  {
    id: 1,
    name: '창원점',
    address: '경남 창원시 성산구 용지로 153번길 3 창원오피스텔 512호',
    tel: '010-2476-3448',
    location: {
      lat: 37.4967,
      lng: 127.0276,
    },
  },
  {
    id: 2,
    name: '김해점',
    address: '김해시 계동로 129번길 42-8 101호',
    tel: '055-323-4523',
    location: {
      lat: 37.3947,
      lng: 127.1119,
    },
  },
  {
    id: 2,
    name: '울산점',
    address: '울산광역시 남구 신정로203번길 61 두산위브더제니스 102호 514호',
    tel: '010-6400-7188',
    location: {
      lat: 37.3947,
      lng: 127.1119,
    },
  },
];

export default function Location() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current && window.naver && window.naver.maps) {
      // 지도 생성
      const map = new window.naver.maps.Map(mapRef.current, {
        center: new window.naver.maps.LatLng(37.4967, 127.0276), // 강남점 기준
        zoom: 12,
      });

      // 각 지점에 마커와 InfoWindow 생성
      branches.forEach((branch) => {
        const marker = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(branch.location.lat, branch.location.lng),
          map: map,
        });

        const contentString = [
          '<div class="iw_inner" style="padding: 15px;">',
          `   <h3 style="margin: 0 0 10px 0;">${branch.name}</h3>`,
          `   <p style="margin: 5px 0;">${branch.address}</p>`,
          '</div>',
        ].join('');

        const infoWindow = new window.naver.maps.InfoWindow({
          content: contentString,
          maxWidth: 300,
          backgroundColor: '#fff',
          borderColor: '#ddd',
          borderWidth: 1,
          anchorSize: new window.naver.maps.Size(20, 20),
          anchorSkew: true,
          anchorColor: '#fff',
        });

        window.naver.maps.Event.addListener(marker, 'click', function () {
          if (infoWindow.getMap()) {
            infoWindow.close();
          } else {
            infoWindow.open(map, marker);
          }
        });
      });
    }
  }, []);

  return (
    <section className={styles.location} id="location">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>오시는 길</h2>
          <p className={styles.subtitle}>
            편안한 상담을 위한 로뎀숲 심리연구소 위치를 안내해드립니다
          </p>
        </motion.div>

        <div className={styles.content}>
          <div className={styles.mapContainer}>
            <div
              ref={mapRef}
              style={{
                width: '100%',
                height: '600px',
              }}
            />
          </div>

          <motion.div
            className={styles.branchList}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            {branches.map((branch) => (
              <motion.div
                key={branch.id}
                className={styles.branchCard}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{branch.name}</h3>
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong>주소:</strong> {branch.address}
                </p>
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong>전화:</strong> {branch.tel}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
