import React, { useState } from "react";
import ReactResizeDetector from "react-resize-detector";

// Обёртка для прокручивающейся середины
// В него должа быть передана высота которую нужно отнять (вычисляется из th и bh если они есть либо 0).
// В него должнен быть передан стиль { top: th } если th вообще есть либо 0.
export const Content = ({ minus, style, children }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        width: "100%",
        height: `calc(100% - (${minus}px))`,
        overflowY: "auto",
        ...style
      }}
    >
      {children}
    </div>
  );
};

// Обёртка для плавающей понельки.
// В него долежн быть передан объявленный снаруже числовой стейт и функция его установки. (h и setH).
// В него должен быть предан стиль для позиционирования на экране, например { top: 0 } или { bottom: 0 }.
export const Resizable = ({ h, setH, style, children }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        width: "100%",
        height: "initial",
        ...style
      }}
    >
      <ReactResizeDetector handleWidth handleHeight>
        {({ width, height }) => {
          if (typeof height !== "number") setH(0);
          else if (h !== height) setH(height);
          return children;
        }}
      </ReactResizeDetector>
    </div>
  );
};

export const Area = ({ top = null, content = null, bottom = null }) => {
  const [th, setTH] = useState(0);
  const [bh, setBH] = useState(0);

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0
      }}
    >
      <Resizable h={th} setH={setTH}>
        <>{top}</>
      </Resizable>
      <Content minus={th + bh} style={{ top: th }}>
        <>{content}</>
      </Content>
      <Resizable h={bh} setH={setBH} style={{ bottom: 0 }}>
        <>{bottom}</>
      </Resizable>
    </div>
  );
};
