import React from "react";

type Props = {
  error: string;
};
export default function ErrorMessages(props: Props) {
  return (
    <div>
      <div role="alert">
        <div className="text-red-500 text-xs italic">
          <p>{props.error}</p>
        </div>
      </div>
    </div>
  );
}
