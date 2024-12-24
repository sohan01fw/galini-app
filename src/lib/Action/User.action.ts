"use server";
import { funcResponse, User } from "@/types/global";
import { prisma } from "../prisma";

//checking user exist in db or not
export async function CheckUser(userEmail: string): Promise<funcResponse> {
  try {
    // check user exists or not
    const checkUser = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!checkUser) {
      return {
        data: null,
        error: true,
        message: "user not found",
        status: 404,
      };
    }
    const userdata: User = {
      email: checkUser.email,
      id: checkUser.id,
      fullname: checkUser.fullname || "",
    };
    return {
      data: userdata,
      message: "successfully check the user data",
      status: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error: true,
      message: "Error while check the user",
      status: 500,
    };
  }
}

//create a new user if not already exist in db
export async function CreateUser(user: User): Promise<funcResponse> {
  try {
    // check user exists or not
    const checkUser = await CheckUser(user.email);
    //save user to db
    if ("data" in checkUser) {
      return {
        data: checkUser.data,
        message: checkUser.message,
        status: checkUser.status,
      };
    }
    const createUserData = await prisma.user.create({
      data: {
        id: user.id,
        email: user.email,
        fullname: user.fullname || "",
        isLoggedIn: true,
      },
    });
    return {
      data: createUserData,
      message: "successfully create user",
      status: 200,
    };
  } catch (error) {
    console.log("error while creating new user", error);
    return {
      error: true,
      message: "Unexpected error occur creating user",
      status: 500,
    };
  }
}
