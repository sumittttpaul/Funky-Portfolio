"use client";

export default function SignatureAnimation() {
  return (
    <div className="mx-auto my-[200px] flex h-auto w-full max-w-[800px] items-center justify-center">
      <video height={222} width={800} autoPlay muted>
        <source src="/signature_video_small.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
