import type { Metadata } from "next"
import { Users } from "lucide-react"

const committees = {
  generalChair: [
    {
      name: "Kieu Xuan Thuc",
      title: "Ph.D",
      role: "Rector of Hanoi University of Industry"
    }
  ],
  generalCoChair: [
    {
      name: "Pham Van Dong",
      title: "Assoc Prof. Ph.D",
      role: "Vice Rector, Hanoi University of Industry"
    },
    {
      name: "Nguyen Van Thien",
      title: "Ph.D",
      role: "Vice Rector, Hanoi University of Industry"
    }
  ],
  steeringCommittee: [
    {
      name: "Tran Duc Tan",
      title: "Ph.D",
      role: "Phenikaa University, Vietnam"
    },
    {
      name: "Le Anh Ngoc",
      title: "Ph.D",
      role: "Director of Innovation Space, Swinburne Vietnam Alliance Program"
    },
    {
      name: "Nguyen Thi Dieu Linh",
      title: "Ph.D",
      role: "Hanoi University of Industry, Vietnam"
    },
    {
      name: "Vijender Kr Solanki",
      title: "Ph.D",
      role: "Stanley College Of Engineering & Technology For Women, Hyderabad, India"
    }
  ],
  organisingCommittee: [
    {
      name: "Nguyen Hong Son",
      title: "Assoc Prof. PhD",
      role: "Head of Department of Science and Technology, Hanoi University of Industry"
    },
    {
      name: "Dang Trong Hop",
      title: "PhD",
      role: "Headmaster School of Information & Communications Technology, Hanoi University of Industry"
    },
    {
      name: "Hoang Manh Kha",
      title: "PhD",
      role: "Headmaster School of Electrical & Electronic Engineering, Hanoi University of Industry"
    }
  ],
  technicalProgramCommittee: [
    { name: "Ahmed J. Obaid", role: "University of Kufa, Iraq" },
    { name: "Bo Li", title: "Ph.D", role: "Harbin Institute of Technology, China" },
    { name: "Bo Quoc Bao", title: "Ph.D", role: "Hanoi University of Industry, Vietnam" },
    { name: "Bui Ngoc Dung", title: "Ph.D", role: "Faculty of Information Technology, University of Transport and Communications, Vietnam" },
    { name: "Chutiporn Anutariya", title: "Ph.D", role: "School of Engineering and Technology (SET), Asian Institute of Technology (AIT), Thailand" },
    { name: "Dang Quyet Thang", title: "Ph.D", role: "Namdinh University of Technology Education–Nute, Vietnam" },
    { name: "Dang Thai Son", title: "Ph.D", role: "School of Engineering and Technology, Vinh University, Vietnam" },
    { name: "Do Quang Hung", title: "Ph.D", role: "Associate Dean of IT Department, UTT, Vietnam" },
    { name: "Doan Nhat Quang", title: "Ph.D", role: "University of Science and Technology of Hanoi, Vietnam" },
    { name: "Gwanggil Jeon", title: "Ph.D", role: "Incheon National University, Korea" },
    { name: "Hiep Xuan Huynh", title: "Ph.D", role: "College of Information and Communication Technology, Can Tho University, Vietnam" },
    { name: "Hoang Huu Viet", title: "Ph.D", role: "School of Engineering and Technology, Vinh University, Vietnam" },
    { name: "Hoang Manh Kha", title: "Ph.D", role: "Hanoi University of Industry, Vietnam" },
    { name: "Hoang Xuan Dau", title: "Ph.D", role: "Dy Dean, Faculty of Information Technology, Posts and Telecommunications Institute of Technology, Hanoi, Vietnam" },
    { name: "Hoang Xuan Tung", title: "Ph.D", role: "VNU University of Engineering and Technology, VietNam" },
    { name: "Imtiaz Mahmud", title: "PhD", role: "Telecommunication and Network Lab., Kyungpook National University, South Korea" },
    { name: "Lam Kwok Yan", title: "Ph.D", role: "School of Computer Science and Engineering, Nanyang Technological University, Singapore" },
    { name: "Lam Sinh Cong", title: "Ph.D", role: "University of Engineering and Technology, VNU, Hanoi, Vietnam" },
    { name: "Le Hong Trang", title: "Ph.D", role: "Ho Chi Minh City University of Technology, Vietnam" },
    { name: "Le Nhat Thang", title: "Ph.D", role: "Posts and Telecommunications Institute of Technology, Vietnam" },
    { name: "Le Van Minh", title: "Ph.D", role: "Vinh University, Vietnam" },
    { name: "Le Van Thai", title: "Ph.D", role: "Hanoi University of Industry, Vietnam" },
    { name: "Marco Anisetti", title: "Ph.D", role: "Università degli Studi di Milano, Italy" },
    { name: "Mohamed Elsakhawy", role: "Computer Science Department, The University of Western Ontario, Canada" },
    { name: "Ngo Hong Son", title: "Ph.D", role: "Phenikaa University, Vietnam" },
    { name: "Nguyen Canh Minh", title: "Ph.D", role: "University of Transport and Communications (UTC), Vietnam" },
    { name: "Nguyen Dang Khoa", title: "Ph.D", role: "Phenikaa University, Vietnam" },
    { name: "Nguyen Dinh Cong", title: "Ph.D", role: "Faculty of Information Technologies and Communication, Hong Duc University, Vietnam" },
    { name: "Nguyen Ha Huy Cuong", title: "Ph.D", role: "Da Nang of University, Vietnam" },
    { name: "Nguyen Hoai Son", title: "Ph.D", role: "Vietnam National University, Vietnam" },
    { name: "Nguyen Huu Phat", title: "Ph.D", role: "Hanoi University of Science and Technology, Vietnam" },
    { name: "Nguyen Huu Thanh", title: "Ph.D", role: "Hanoi University of Science and Technology, Vietnam" },
    { name: "Nguyen Ngoc Hung", role: "Senior electronic engineer, MKS PSA Company, Vietnam" },
    { name: "Nguyen Thanh Hai", title: "PhD", role: "College of Information and Communication Technology, Can Tho University, Vietnam" },
    { name: "Nguyen Thanh Tung", title: "Ph.D", role: "International School, Vietnam National University (VNU), Hanoi, Vietnam" },
    { name: "Nguyen Thi Le", title: "Ph.D", role: "Department of GT&FT, Hanoi University of Industry, Vietnam" },
    { name: "Nguyen Thi Phuoc Van", title: "Ph.D", role: "National Institute of Information and Communications Technology, Japan" },
    { name: "Nguyen Tien Anh", title: "Ph.D", role: "Le Quy Don Technical University, Vietnam" },
    { name: "Nguyen Tien Dzung", title: "Ph.D", role: "Hanoi University of Science and Technology, Vietnam" },
    { name: "Nguyen Trung Tan", title: "Ph.D", role: "Le Quy Don University, Vietnam" },
    { name: "Nguyen Van Thang", title: "Ph.D", role: "ThuyLoi University, VietNam" },
    { name: "Pham Minh Nghia", title: "Ph.D", role: "Le Quy Don University, Vietnam" },
    { name: "Pham Xuan Bach", title: "Ph.D", role: "Nute – Namdinh University of Technology Education – NUTE, Vietnam" },
    { name: "Rafidah Binti Md Noor", title: "Ph.D", role: "Faculty of Computer Science & Information Technology, University of Malaya, Kuala Lumpur, Malaysia" },
    { name: "Sarachandran Nair", title: "Ph.D", role: "Head of Computing Department, Muscat College, Oman" },
    { name: "Son Thanh Cao", title: "Ph.D", role: "School of Engineering and Technology, Vinh University, Vinh City, Nghe An, Vietnam" },
    { name: "Subrata Chowdhury", title: "Ph.D", role: "SVCET Engineering College, India" },
    { name: "Sung-Huyp Lee", role: "Korea Radio Promotion Agency, Korea" },
    { name: "Swetha M S", title: "Ph.D", role: "B M S Institute of Technology and Management, Bengaluru, India" },
    { name: "Ta Duc-Tuyen", title: "Ph.D", role: "Telecom ParisTech, France" },
    { name: "Thang X. Vu", title: "Ph.D", role: "University of Luxembourg, Luxembourg" },
    { name: "Tong Van Luyen", title: "Ph.D", role: "Hanoi University of Industry, Vietnam" },
    { name: "Tran Dinh Tan", title: "Ph.D", role: "Telecommunications University (TCU), Vietnam" },
    { name: "Tran Duc Nghia", title: "Ph.D", role: "Institute of Information Technology, VAST, Vietnam" },
    { name: "Tran Thi Thuy Quynh", title: "Ph.D", role: "University of Engineering and Technology, VNU, Hanoi, Vietnam" },
    { name: "Truong Cong Doan", title: "PhD", role: "International School, Vietnam National University (VNU), Hanoi, Vietnam" },
    { name: "Tu Viet Nguyen", title: "Ph.D", role: "Broadcom Ltd, USA" },
    { name: "Van Phu Tuan", title: "Ph.D", role: "Kongju National University, Cheonan, South Korea" },
    { name: "Van-Hau Nguyen", role: "Director of AI Center, Hung Yen University of Technology, Vietnam" },
    { name: "Van-Truong Nguyen", title: "Ph.D", role: "Head of Department of Mechatronics Engineering, Hanoi University of Industry (HaUI), Hanoi, Vietnam" },
    { name: "Vu Trung Kien", title: "Ph.D", role: "HaUI, Hanoi University of Industry, Vietnam" },
    { name: "Won-Kyeong Seo", title: "Ph.D", role: "Yeungjin University, Korea" },
    { name: "Yang Li", title: "Ph.D", role: "Chinese Academy of Sciences, China" },
    { name: "Zonhgyu Lu", title: "Ph.D", role: "University of Huddersfield, UK" },
    { name: "Vu Duc Minh", title: "PhD", role: "National Economics University, Hanoi, Vietnam" },
    { name: "Tran Hung", role: "Phenikaa University, Hanoi, Vietnam" },
    { name: "Pham Van Cu", title: "Ph.D", role: "Japan Advanced Institute of Science and Technology, Japan" }
  ]
}

export default function CommitteePage() {
  return (
    <div className="container mx-auto px-4 mt-20 py-16 md:px-6">
      <div className="flex items-center justify-center mb-12">
        <Users className="h-10 w-10 text-primary mr-4" />
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          Conference Committee
        </h1>
      </div>

      <div className="grid gap-12">
        {/* General Chair */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">General Chair</h2>
          <div className="grid gap-6 md:grid-cols-1">
            {committees.generalChair.map((member, i) => (
              <div key={i} className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold">{member.name}, {member.title}</h3>
                <p className="text-muted-foreground mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* General Co-Chair */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">General Co-Chair</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {committees.generalCoChair.map((member, i) => (
              <div key={i} className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold">{member.name}, {member.title}</h3>
                <p className="text-muted-foreground mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Steering Committee */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">Steering Committee</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {committees.steeringCommittee.map((member, i) => (
              <div key={i} className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold">{member.name}, {member.title}</h3>
                <p className="text-muted-foreground mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Organizing Committee */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">Organizing Committee</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {committees.organisingCommittee.map((member, i) => (
              <div key={i} className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold">{member.name}, {member.title}</h3>
                <p className="text-muted-foreground mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Program Committee */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">Technical Program Committee (TPC)</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {committees.technicalProgramCommittee.map((member, i) => (
              <div key={i} className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold">{member.name}{member.title ? `, ${member.title}` : ""}</h3>
                <p className="text-muted-foreground mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}