import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const TopHeader = () => {
  return (
    <div className="header-area">
      {/* header-top */}
      <div className="bg-blue-950 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2">
              <div className="flex items-center space-x-4 mb-2 md:mb-0">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <p className="text-sm">080-25234313</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <p className="text-sm">info@kncs.edu.in</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex justify-start md:justify-end">
                <ul className="flex space-x-3">
                  <li>
                    <a href="#" className="hover:text-indigo-200 transition duration-300">
                      <Facebook className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-200 transition duration-300">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-200 transition duration-300">
                      <Youtube className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-200 transition duration-300">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;