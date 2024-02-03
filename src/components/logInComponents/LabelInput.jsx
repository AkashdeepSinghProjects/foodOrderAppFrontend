export default function LabelInput({ name, isPassword, isInvalid, ...props }) {
  let styles =
    "rounded text-black p-2 border-2 border-black ms-2 w-[60%] focus:outline-orange-800 ";
  if (isInvalid) {
    styles += " outline-red-700 bg-rose-300";
  }
  return (
    <>
      {isInvalid && (
        <small className="flex justify-end w-[100%] text-xs text-red-300">
          *password not matched
        </small>
      )}
      <div className="flex justify-between w-[100%]">
        {name && (
          <label className=" capitalize font-semibold text-lg mt-3 min-w-fit">
            {name}:
          </label>
        )}

        {isPassword ? (
          <input
            name={name}
            type="password"
            className={styles}
            onFocus={(e) => (e.target.rows = 3)}
            onBlur={(e) => (e.target.rows = 1)}
            minLength={6}
            maxLength={100}
            required
            {...props}
          ></input>
        ) : (
          <input
            name={name}
            className={styles}
            placeholder="xyz@example.com"
            type="email"
            required
            {...props}
          ></input>
        )}
      </div>
    </>
  );
}
