import React from "react";

type title = {
  title: string;
};
export default function CustomTitle(props: title) {
  return (
    <article className="prose prose-sm lg:prose-sm">
      <h3>{props.title}</h3>
    </article>
  );
}
