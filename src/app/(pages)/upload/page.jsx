"use client";

import Image from "next/image";
import { useState, useRef } from "react";

export default function AvatarUploadPage() {
  const inputFileRef = useRef(null);
  const [blob, setBlob] = useState(null);
  return (
    <>
      <h1>Upload Your Avatar</h1>

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          const file = inputFileRef.current.files[0];
          // alert(JSON.stringify(file, null, 2))
          const response = await fetch(
            `/api/avatar/upload?filename=${file.name}`,
            {
              method: "POST",
              body: file,
            }
          );

          const newBlob = await response.json();

          setBlob(newBlob);
        }}
      >
        <input name="file" ref={inputFileRef} type="file" required />
        <button type="submit">Upload</button>
      </form>
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
          <div className="relative w-24 h-24 bg-red-200">{blob && <Image src={blob.url} fill style={{objectFit: 'contain'}} alt="logo"></Image>}</div>
        </div>
      )}
    </>
  );
}
