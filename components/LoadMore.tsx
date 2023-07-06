"use client";

import { useRouter } from "next/router";
import { FC } from "react";
import Button from "./Button";

interface LoadMoreProps {
  startCursor: string;
  endCursor: string;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

const LoadMore: FC<LoadMoreProps> = ({
  startCursor,
  endCursor,
  hasPreviousPage,
  hasNextPage,
}) => {
  const router = useRouter();
  const handleNavigation = (direction: string) => {};

  return (
    <div>
      {hasPreviousPage && (
        <Button
          title="First Page"
          handleClick={() => handleNavigation("first")}
        />
      )}
      {hasNextPage && (
        <Button title="Next" handleClick={() => handleNavigation("next")} />
      )}
    </div>
  );
};

export default LoadMore;
