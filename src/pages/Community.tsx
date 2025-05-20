
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Calendar, TreeDeciduous, Newspaper, Image, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Community = () => {
  const [treeCount] = useState(10);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-24 mt-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-earth-forest mb-4">Our Community</h1>
          <p className="text-xl text-earth-forest/80 max-w-2xl mx-auto">
            Join our growing community of earth lovers who share stories, updates, and make a difference together.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="glass-panel py-6 px-10 flex items-center">
            <TreeDeciduous className="w-10 h-10 text-earth-green mr-4" />
            <div>
              <h2 className="text-2xl font-semibold">Trees Planted</h2>
              <div className="text-4xl font-bold text-earth-green">{treeCount.toLocaleString()}</div>
            </div>
          </div>
        </div>

        <Alert className="mb-12 border-earth-light-green/30 bg-earth-light-green/10">
          <AlertTitle className="text-xl flex items-center">
            <Clock className="mr-2 h-5 w-5" />
            Coming Soon!
          </AlertTitle>
          <AlertDescription className="text-lg">
            We're working hard to build our community platform. Soon you'll be able to share your stories, 
            upload photos, see upcoming events and connect with other earth lovers!
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="card-earth">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <Newspaper className="mr-2 h-5 w-5 text-earth-green" />
                  Stories & News
                </CardTitle>
                <Badge variant="outline" className="bg-earth-light-green/10">Coming Soon</Badge>
              </div>
              <CardDescription>Share and read inspiring environmental stories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-40 bg-earth-light-green/10 rounded-lg flex items-center justify-center">
                <p className="text-earth-forest/70 text-lg">Story sharing will be available soon</p>
              </div>
            </CardContent>
            <CardFooter className="text-sm text-earth-forest/60">
              Join us to share your environmental journey
            </CardFooter>
          </Card>

          <Card className="card-earth">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <Image className="mr-2 h-5 w-5 text-earth-green" />
                  Photo Gallery
                </CardTitle>
                <Badge variant="outline" className="bg-earth-light-green/10">Coming Soon</Badge>
              </div>
              <CardDescription>Upload and view photos from community actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-40 bg-earth-light-green/10 rounded-lg flex items-center justify-center">
                <p className="text-earth-forest/70 text-lg">Photo uploads will be available soon</p>
              </div>
            </CardContent>
            <CardFooter className="text-sm text-earth-forest/60">
              Share visual stories of your environmental impact
            </CardFooter>
          </Card>

          <Card className="card-earth col-span-1 md:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-earth-green" />
                  Upcoming Events
                </CardTitle>
                <Badge variant="outline" className="bg-earth-light-green/10">Coming Soon</Badge>
              </div>
              <CardDescription>Find and join local environmental events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-40 bg-earth-light-green/10 rounded-lg flex items-center justify-center">
                <p className="text-earth-forest/70 text-lg">Event calendar will be available soon</p>
              </div>
            </CardContent>
            <CardFooter className="text-sm text-earth-forest/60">
              Connect with other environmentally conscious individuals at local events
            </CardFooter>
          </Card>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-earth-forest mb-4">Want to be notified when our community features launch?</h3>
          <p className="mb-6">Subscribe to our newsletter to stay updated!</p>
          <Link to="/#join" className="btn-earth">Join Our Newsletter</Link>
        </div>

        <Separator className="my-16 bg-earth-light-green/20" />

        <div className="text-center mb-8">
          <Link to="/" className="text-earth-forest hover:text-earth-green transition-colors duration-300 font-medium">
            Return to Home
          </Link>
        </div>

        <div className="text-center text-earth-forest/60">
          <p>Our community features are under development. Check back soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Community;
