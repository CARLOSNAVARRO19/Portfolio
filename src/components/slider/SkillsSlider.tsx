import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { skills } from "../../data/skill";
import SkillCard from "../cards/SkillCard";

interface SkillsSliderProps {
    category: "All" | "Frontend" | "Backend" | "Database" | "Tools";
}

const SkillsSlider = ({ category }: SkillsSliderProps) => {
    const filteredSkills =
        category === "All"
            ? skills
            : skills.filter((skill) => skill.category === category);

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            grabCursor={true}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 4,
                },
            }}
        >
            {filteredSkills.map((skill) => (
                <SwiperSlide key={skill.id}>
                    <SkillCard skill={skill} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SkillsSlider;