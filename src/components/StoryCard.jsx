import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StoryCard = ({ story }) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{story.title}</CardTitle>
        <CardDescription>Upvotes: {story.score}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button as="a" href={story.url} target="_blank" rel="noopener noreferrer">
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default StoryCard;