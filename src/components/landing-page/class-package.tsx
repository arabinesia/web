import Link from "next/link";

export const ClassPackage = () => {
  return (
    <div
      id="class-package"
      className="flex flex-col justify-center items-center bg-slate-50 min-h-screen p-4"
    >
      <h1 className="font-arabic mb-10 mt-24 text-center">
        الباقة العربية الإندونيسية
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="card1 flex flex-col justify-center items-center gap-8 border-2 border-solid border-slate-500 rounded-xl w-80 h-128 drop-shadow-xl transition-colors duration-500 group hover:bg-gradient-to-r from-teal-700 to hover:bg-emerald-500 hover:text-white hover:border-0 hover:shadow-xl">
          <h2 className="font-arabic">شهرية</h2>
          <div className="flex flex-col items-center w-full max-w-72 text-right rtl">
            <p className="mb-6 text-center text-xl  font-light font-arabic">
              باقة تعليمية شهرية يمكن مواصلتها أو إيقافها في أي وقت.
            </p>
            <div className="flex items-start justify-center text-xl">
              <span className="leading-none mr-1">$</span>
              <h2 className="leading-none">
                <span className="text-6xl">8</span> / شهرياً
              </h2>
            </div>
            <p className="text-center text-xl mt-10 w-full max-w-52 font-light font-arabic">
              المدة 1 شهر 4 مواد فيديو وتمارين 1 وقت للتفاعل مع الأسئلة والأجوبة
              وحدة التعلم الرقمي
            </p>
            <Link href="/signup">
              <p className="border-2 rounded-3xl font-bold border-black px-10 py-3 mt-10 transition-colors duration-500 group-hover:bg-slate-50 group-hover:border-0 group-hover:text-emerald-500 hover:bg-white hover:text-emerald-500 hover:border-emerald-500">
                سجل الآن
              </p>
            </Link>
          </div>
        </div>

        <div className="card1 flex flex-col justify-center items-center gap-8 border-2 border-solid border-slate-500 rounded-xl w-80 h-128 drop-shadow-xl transition-colors duration-500 group hover:bg-gradient-to-r from-teal-700 to hover:bg-emerald-500 hover:text-white hover:border-0 hover:shadow-xl">
          <h2 className="font-arabic">المستوى</h2>
          <div className="flex flex-col items-center w-full max-w-72 text-right rtl">
            <p className="mb-6 text-center text-xl font-light font-arabic">
              حزم تعلم اللغة الإندونيسية حسب الصف أو المستوى (أساسي/متوسط/متقدم)
            </p>
            <div className="flex items-start justify-center text-xl">
              <span className="leading-none mr-1">$</span>
              <h2 className="leading-none">
                <span className="text-6xl">29</span> / المستوى
              </h2>
            </div>
            <p className="text-center text-xl mt-10 w-full max-w-52 font-light font-arabic">
              المدة 4 أشهر 16 مادة فيديو وتمارين 2 مرات تفاعل أسئلة وأجوبة وحدة
              التعلم الرقمي شهادة
            </p>
            <Link href="/signup">
              <p className="border-2 rounded-3xl font-bold border-black px-10 py-3 mt-10 transition-colors duration-500 group-hover:bg-slate-50 group-hover:border-0 group-hover:text-emerald-500 hover:bg-white hover:text-emerald-500 hover:border-emerald-500">
                سجل الآن
              </p>
            </Link>
          </div>
        </div>

        <div className="card1 flex flex-col justify-center items-center gap-8 border-2 border-solid border-slate-500 rounded-xl w-80 h-128 drop-shadow-xl transition-colors duration-500 group hover:bg-gradient-to-r from-teal-700 to hover:bg-emerald-500 hover:text-white hover:border-0 hover:shadow-xl">
          <h2 className="font-arabic">باقات كاملة</h2>
          <div className="flex flex-col items-center w-full max-w-72 text-right rtl">
            <p className="mb-6 text-center text-xl font-light font-arabic">
              الباقة التعليمية الكاملة من المستوى الأساسي إلى المستوى المتقدم
            </p>
            <div className="flex items-start justify-center text-xl">
              <span className="leading-none mr-1">$</span>
              <h2 className="leading-none">
                <span className="text-6xl">79</span> / باقة
              </h2>
            </div>
            <p className="text-center text-xl mt-10 w-full max-w-52 font-light font-arabic">
              المدة الزمنية 12 أشهر 48 مادة فيديو وتمارين 6 مرات تفاعل أسئلة
              وأجوبة وحدة التعلم الرقمي الشهادة
            </p>
            <Link href="/signup">
              <p className="border-2 rounded-3xl font-bold border-black px-10 py-3 mt-10 transition-colors duration-500 group-hover:bg-slate-50 group-hover:border-0 group-hover:text-emerald-500 hover:bg-white hover:text-emerald-500 hover:border-emerald-500">
                سجل الآن
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
