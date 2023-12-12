import React, { useState, useEffect } from "react";
import {
  LockClosedIcon,
  LockOpenIcon,
  UserCircleIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import EmailIcon from "../../atoms/icon/EmailIcon";
import useUser from "@/src/hooks/useUser";
import FacultyList from "./FacultyList";
import { FacultyWithMajors } from "@/src/@types/faculty";
import { Major, Faculty } from "@prisma/client";
import MajorList from "./MajorList";

const Profile: React.FC<{ userId: string }> = ({ userId }) => {
  const { user, isLoading, mutate, isValidating } = useUser(userId);
  const [nickname, setNickname] = useState<string>(user?.nickname || "");
  const [faculty, setFaculty] = useState<Faculty>(
    user?.faculty || ({} as Faculty)
  );
  const [selectedMajor, setSelectedMajor] = useState<Major>(
    user?.major || ({} as Major)
  );
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    setNickname(user?.nickname || "");
    setFaculty(user?.faculty || ({} as FacultyWithMajors));
    setSelectedMajor(user?.major || ({} as Major));
  }, [user]);

  useEffect(() => {
    setSelectedMajor({} as Major);
  }, [faculty]);

  if (!user) return <></>;

  const updateUserInfo = async () => {
    const data = {
      nickname,
      facultyId: faculty.id,
      majorId: selectedMajor.id,
      userId,
    };
    try {
      const res = await fetch("/api/user/updateUser", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`API error: ${res.status} - ${res.statusText}`);
      }
    } catch (error) {
      console.error("updateUserInfo error:", error);
      throw new Error("エラーが発生しました");
    }
  };

  const saveProfile = async () => {
    if (!isEditing) return;
    if (
      nickname === user?.nickname &&
      faculty.id === user?.faculty?.id &&
      selectedMajor.id === user?.major?.id
    ) {
      setIsEditing(false);
      return;
    }
    if (!nickname) {
      alert("ニックネームを入力してください");
      return;
    }
    if (!faculty.id) {
      alert("学部を選択してください");
      return;
    }
    if (!selectedMajor.id) {
      alert("専攻を選択してください");
      return;
    }
    await updateUserInfo();
    mutate(
      {
        id: userId,
        email: user.email,
        nickname,
        facultyId: faculty.id,
        majorId: selectedMajor.id,
      },
      {
        optimisticData: {
          id: user.id,
          email: user.email,
          nickname,
          faculty: { id: faculty.id, name: faculty.name },
          major: {
            id: selectedMajor.id,
            name: selectedMajor.name,
            facultyId: faculty.id,
          },
        },
        rollbackOnError(error) {
          return (
            typeof error === "object" &&
            error !== null &&
            "name" in error &&
            (error as { name?: string }).name !== "AbortError"
          );
        },
      }
    );
    setIsEditing(false);
  };

  const toggleEditing = () => setIsEditing(!isEditing);

  const renderProfileField = (
    icon: React.ReactNode,
    content: React.ReactNode
  ) => (
    <div className="flex justify-between lg:max-w-lg items-center gap-x-4">
      {icon}
      {content}
    </div>
  );

  console.log(user);

  return (
    <div className="w-full">
      <h2 className="text-center text-2xl font-bold mb-8">プロフィール</h2>
      <div className="flex flex-col gap-y-2 mx-auto rounded-md border border-gray-200 p-4">
        <div className="flex justify-between items-center mb-4">
          <p
            className={`text-gray-500 text-xs md:text-base ${
              isEditing ? "fade-in" : ""
            }`}
          >
            {isEditing
              ? "保存するにはロックしてください"
              : "編集するにはロックを解除してください"}
          </p>
          <button
            onClick={async () => {
              toggleEditing();
              await saveProfile();
            }}
            className="flex items-center gap-x-2 text-gray-500 text-xs md:text-base"
          >
            {isEditing ? (
              <LockOpenIcon width={20} className="text-black fade-in" />
            ) : (
              <LockClosedIcon width={20} className="text-black" />
            )}
          </button>
        </div>

        {/* ニックネーム */}
        {renderProfileField(
          <UserCircleIcon width={20} />,
          isEditing ? (
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="fade-in h-7 w-full text-sm md:text-lg px-2 py-1 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-yellow-500 placeholder:text-end"
              placeholder={user?.nickname || "ニックネームを入力してください"}
            />
          ) : (
            <>
              {isValidating ? (
                <span className="h-7 animate-pulse w-full text-sm md:text-lg px-2 py-1 rounded-md bg-gray-100 text-end"></span>
              ) : (
                <span className="h-7 w-full text-sm md:text-lg px-2 py-1 rounded-md bg-gray-100 text-end">
                  {user?.nickname}
                </span>
              )}
            </>
          )
        )}

        {/* 学部 */}
        {renderProfileField(
          <BuildingOfficeIcon width={20} />,
          isEditing ? (
            <FacultyList selected={faculty} setSelected={setFaculty} />
          ) : isValidating ? (
            <span className="h-7 w-full animate-pulse text-sm md:text-lg px-2 py-1 rounded-md bg-gray-100 text-end"></span>
          ) : (
            <span className="h-7 w-full text-sm md:text-lg px-2 py-1 rounded-md bg-gray-100 text-end">
              {user?.faculty?.name}
            </span>
          )
        )}

        {/* 専攻 */}
        {renderProfileField(
          <AcademicCapIcon width={20} />,
          isEditing ? (
            <MajorList
              facultyId={faculty.id}
              major={selectedMajor}
              setMajor={setSelectedMajor}
            />
          ) : isValidating ? (
            <span className="h-7 w-full animate-pulse text-sm md:text-lg px-2 py-1 rounded-md bg-gray-100 text-end"></span>
          ) : (
            <span className="h-7 w-full text-sm md:text-lg px-2 py-1 rounded-md bg-gray-100 text-end">
              {user?.major?.name}
            </span>
          )
        )}

        {/* email */}
        {renderProfileField(
          <EmailIcon />,
          <span className="w-full text-sm md:text-lg px-2 py-1 rounded-md bg-gray-100 text-end">
            {user?.email}
          </span>
        )}
      </div>
    </div>
  );
};

export default Profile;
