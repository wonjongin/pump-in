import { sendEmail } from "lib/email";
import Link from "next/link";
import { useEffect, useState } from "react";

interface InquiryProps {
  title: string;
}

function inquiryMailBuilder(
  title: string,
  email: string,
  contact: string,
  desc: string
) {
  return `
  <h3>이메일: ${email}</h3>
  <h3>연락처: ${contact}</h3>
  <p>${desc}</p>
  `;
}

export default function Inquiry(props: InquiryProps) {
  //   const [send, setSend] = useState(false);
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [desc, setDesc] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const toBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let attachments: any = [];
    console.log(files);
    for (var i = 0; i < files.length; i++) {
      attachments.push({
        filename: files[i].name,
        path: await toBase64(files[i]),
      });
    }

    const data = {
      title: title,
      desc: inquiryMailBuilder(title, email, contact, desc),
      files: attachments,
    };
    await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setTitle("");
        setContact("");
        setEmail("");
        setDesc("");
        setFiles([]);
        alert("문의가 전송되었습니다.");
      }
    });
  };

  return (
    <>
      <div>
        <section className="">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="lg:col-span-2 lg:py-12">
                <p className="max-w-xl text-lg">
                  {/* At the same time, the fact that we are wholly owned and
                  totally independent from manufacturer and other group
                  control gives you confidence that we will only recommend
                  what is right for you. */}
                  {props.title}가 필요하시면 편하게 문의해주세요!! 양식에 따라
                  제목과 회신받을 이메일 및 연락처, 문의하고 싶은 내용을 정확히
                  작성하시고 필요하신 경우 첨부파일을 통해 사진을 보내주세요.
                  작성하신 후에는 아래 문의하기 버튼을 눌러주세요.
                  <br />
                  <br />
                  ⚠️ 문의하기 버튼을 누른 후에는 완료메시지가 나올 때까지 잠시
                  기다려 주세요! ⚠️
                </p>

                <div className="mt-8">
                  <Link
                    href="/inquiry/call"
                    className="text-2xl font-bold text-pink-600"
                  >
                    032-574-0479
                  </Link>

                  <address className="mt-2 not-italic">
                    (22830) 인천광역시 서구 가좌로 54 (주안 BT센터 2차
                    411-413호)
                  </address>
                </div>
              </div>

              <div className="rounded-lg bg-white dark:bg-neutral-700 p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form
                  action=""
                  className="space-y-4"
                  onSubmit={async (e) => await handleSubmit(e)}
                >
                  <div>
                    <label className="sr-only" htmlFor="title">
                      Title
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="제목"
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                        placeholder="이메일 주소"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                        placeholder="연락처"
                        type="tel"
                        id="phone"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="내용"
                      rows={8}
                      id="message"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                  </div>
                  <div>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      type="file"
                      id="file"
                      multiple
                      onChange={(e) => {
                        if (e.target.files !== null) {
                          const newFiles = [];
                          for (let i = 0; i < e.target.files.length; i++) {
                            newFiles.push(e.target.files[i]);
                          }
                          setFiles(newFiles);
                        }
                      }}
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                    >
                      <span className="font-medium"> 문의 보내기 </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-3 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
