import { ContentBox } from "@/components/Layout"
import Title from "antd/es/typography/Title"

function Home() {
  return (
    <section className="">
      <ContentBox>
        <Title level={2} >
          Grupos
        </Title>
        <div className="placeholder">
          lista de grupos
        </div>
      </ContentBox>
      <ContentBox>
        <Title level={2} >
          Recetas
        </Title>
        <div className="placeholder">
          lista de últimas recetas
        </div>
      </ContentBox>
      <ContentBox>
        <Title level={2} >
          Planes
        </Title>
        <div className="placeholder">
          lista de últimos planes
        </div>
      </ContentBox>

    </section>
  )
}
export default Home