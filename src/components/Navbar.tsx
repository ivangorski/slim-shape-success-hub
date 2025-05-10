
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, LogIn, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();

  // Function to get the user's initials for the avatar fallback
  const getUserInitials = () => {
    if (!user) return "GU";
    
    const email = user.email || "";
    if (email) {
      return email.substring(0, 2).toUpperCase();
    }
    
    return "U";
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl md:text-2xl gradient-text">TransformU</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
            Home
          </Link>
          <a href="#programs" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
            Programs
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
            Success Stories
          </a>
          <a href="#about" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
            About Us
          </a>
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative rounded-full h-8 w-8 p-0">
                  <Avatar>
                    <AvatarImage src={user.user_metadata?.avatar_url} />
                    <AvatarFallback className="bg-teal-100 text-teal-800">
                      {getUserInitials()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    {user.email && (
                      <p className="font-medium">{user.email}</p>
                    )}
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  className="cursor-pointer"
                  onClick={() => signOut()}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild size="sm" className="bg-teal-600 hover:bg-teal-700">
              <Link to="/auth">
                Start Your Journey
              </Link>
            </Button>
          )}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 w-full shadow-lg py-4 px-4 z-50 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-teal-600 transition-colors font-medium px-4 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#programs" 
              className="text-gray-600 hover:text-teal-600 transition-colors font-medium px-4 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-600 hover:text-teal-600 transition-colors font-medium px-4 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Success Stories
            </a>
            <a 
              href="#about" 
              className="text-gray-600 hover:text-teal-600 transition-colors font-medium px-4 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            
            {user ? (
              <div className="px-4 py-2">
                <div className="flex items-center space-x-3 mb-3">
                  <Avatar>
                    <AvatarImage src={user.user_metadata?.avatar_url} />
                    <AvatarFallback className="bg-teal-100 text-teal-800">
                      {getUserInitials()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    {user.email && <p className="font-medium">{user.email}</p>}
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full flex items-center justify-center"
                  onClick={() => {
                    signOut();
                    setIsOpen(false);
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </Button>
              </div>
            ) : (
              <div className="px-4 py-2">
                <Button 
                  asChild 
                  className="w-full bg-teal-600 hover:bg-teal-700"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/auth">
                    <LogIn className="mr-2 h-4 w-4" />
                    <span>Sign In / Sign Up</span>
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
