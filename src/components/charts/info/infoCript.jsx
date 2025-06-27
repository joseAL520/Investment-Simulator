import { searchActive } from "../../buySellCryptoModal/logic/optiosCriptos";

export const Info = ({ dataCripto }) => {
  const searchImage = (code) => {
    const { img } = searchActive(code);
    return img;
  };

  const searchColor = (code) => {
    const { color } = searchActive(code);
    return color;
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {dataCripto.map((value, index) => (
        <div
          key={index}
          className="flex items-center gap-3 p-2 w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl"
        >
          <img
            src={searchImage(value.activo)}
            alt={value.activo}
            className="w-6 h-6 object-contain"
          />
          <label className="text-sm sm:text-base font-medium truncate w-20 sm:w-32">
            {value.activo}
          </label>
          <div
            className="rounded-full w-3 h-3 shrink-0"
            style={{ backgroundColor: searchColor(value.activo) }}
          ></div>
        </div>
      ))}
    </div>
  );
};
