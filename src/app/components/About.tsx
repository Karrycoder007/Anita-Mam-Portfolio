import ImageSlider from './ImageSlider';
import SmoothCounter from './SmoothCounter';
import { Award, Users, BadgeCheck } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-24 bg-gradient-to-b from-yellow-50 to-white overflow-hidden px-4 sm:px-6 md:px-20"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <ImageSlider />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-800 mb-6">
            About Anita Raicar
          </h2>

          <p className="text-gray-700 mb-5 leading-relaxed text-base sm:text-lg">
            Anita Raicar is a passionate <strong>Art of Living teacher</strong> and{' '}
            <strong>Computer Science educator</strong> devoted to uplifting lives
            through mindfulness, service, and learning.
          </p>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-10">
            Over the past decade, she has conducted multiple workshops,
            empowered students, and supported community initiatives aimed at
            social and spiritual growth.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 sm:gap-10 md:gap-16 mb-10">
            <div className="text-center">
              <SmoothCounter to={10} />
              <p className="text-gray-700 text-sm mt-2">Years Experience</p>
            </div>

            <div className="text-center">
              <SmoothCounter to={400} />
              <p className="text-gray-700 text-sm mt-2">Lives Touched</p>
            </div>

            <div className="text-center">
              <SmoothCounter to={50} />
              <p className="text-gray-700 text-sm mt-2">Workshops</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <div className="flex items-center justify-center sm:justify-start gap-2 bg-white shadow-md rounded-lg p-4 border border-yellow-100 hover:shadow-lg transition">
              <BadgeCheck className="text-yellow-600 w-5 h-5" />
              <p className="text-yellow-700 font-semibold text-sm">
                Certified AOL Instructor
              </p>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-2 bg-white shadow-md rounded-lg p-4 border border-yellow-100 hover:shadow-lg transition">
              <Award className="text-yellow-600 w-5 h-5" />
              <p className="text-yellow-700 font-semibold text-sm">
                National Educator Award 2022
              </p>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-2 bg-white shadow-md rounded-lg p-4 border border-yellow-100 hover:shadow-lg transition">
              <Users className="text-yellow-600 w-5 h-5" />
              <p className="text-yellow-700 font-semibold text-sm">
                Community Mentor & Speaker
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
