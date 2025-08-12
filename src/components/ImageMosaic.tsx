import React from 'react';

import img1 from '@/assets/992efb13-0a73-4123-85a0-aed68443d18f.JPG';
import img2 from '@/assets/01114349-11c2-474b-8c3b-4ba657e4bf44.JPG';
import img3 from '@/assets/1994f335-8eac-4417-99f2-78d1578b1dd6.JPG';
import img4 from '@/assets/22e55e04-fe56-45b5-8862-712a19835f3c.JPG';
import img5 from '@/assets/2a72ceae-1962-4b09-acee-39c15dbdd746.JPG';
import img6 from '@/assets/45639a28-c44f-49dc-aca2-8234f5d0aba7.JPG';
import img7 from '@/assets/4e2f16e8-e5cf-4529-9db2-9c41ba58d9d2.JPG';
import img8 from '@/assets/528dbdaa-2233-4d10-a3a3-9b1e9abf6bb7.JPG';
import img9 from '@/assets/6d3a979b-4e1f-42ee-8ee4-425fdde6e7e1.JPG';
import img10 from '@/assets/bea89794-31c2-46db-8227-a67c7cd9f870.JPG';
import img11 from '@/assets/e188927a-4cf1-49a9-880c-9986b9720ec1.JPG';
import img12 from '@/assets/e6f9047a-d481-487c-85ac-61c003152129.JPG';
import img13 from '@/assets/f3c8d490-c680-4b51-8129-75799f470992.JPG';

const sources = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13,
];

const pickAspect = (index: number): string => {
  const mod = index % 10;
  if (mod === 0 || mod === 5) return 'aspect-[4/5] lg:col-span-2';
  if (mod === 2 || mod === 7) return 'aspect-[3/2] lg:col-span-2';
  return 'aspect-square';
};

const ImageMosaic: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sources.map((src, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl shadow-soft hover:shadow-elegant transition-all duration-500 ${pickAspect(i)}`}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageMosaic;

