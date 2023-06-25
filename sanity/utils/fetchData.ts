import { groq } from "next-sanity";
import { client } from "../lib/client";
import { member } from "@/types/member";

export async function getCorp(): Promise<member[]> {
  return client.fetch(
    groq`*[_type == "corporate"] | order(_createdAt asc){
        _id,
        _createdAt,
        name,
        designation,
        gitUrl,
        linkedInUrl,
        portfolioUrl,
        "image": image.asset->url
    }`
  );
}

export async function getWad(): Promise<member[]> {
  return client.fetch(
    groq`*[_type == "wad"]{
          _id,
          _createdAt,
          name,
          designation,
          gitUrl,
          linkedInUrl,
          portfolioUrl,
          "image": image.asset->url
      }`
  );
}

export async function getAlumini(): Promise<member[]> {
  return client.fetch(
    groq`*[_type == "alumini"]{
          _id,
          _createdAt,
          name,
          designation,
          gitUrl,
          linkedInUrl,
          portfolioUrl,
          "image": image.asset->url
      }`
  );
}

export async function getComsoc(): Promise<member[]> {
  return client.fetch(
    groq`*[_type == "comsoc"]{
          _id,
          _createdAt,
          name,
          designation,
          gitUrl,
          linkedInUrl,
          portfolioUrl,
          "image": image.asset->url
      }`
  );
}

export async function getIas(): Promise<member[]> {
  return client.fetch(
    groq`*[_type == "ias"]{
          _id,
          _createdAt,
          name,
          designation,
          gitUrl,
          linkedInUrl,
          portfolioUrl,
          "image": image.asset->url
      }`
  );
}

export async function getMnc(): Promise<member[]> {
  return client.fetch(
    groq`*[_type == "mnc"]{
          _id,
          _createdAt,
          name,
          designation,
          gitUrl,
          linkedInUrl,
          portfolioUrl,
          "image": image.asset->url
      }`
  );
}

export async function getPels(): Promise<member[]> {
  return client.fetch(
    groq`*[_type == "pels"]{
          _id,
          _createdAt,
          name,
          designation,
          gitUrl,
          linkedInUrl,
          portfolioUrl,
          "image": image.asset->url
      }`
  );
}

export async function getPublicity(): Promise<member[]> {
  return client.fetch(
    groq`*[_type == "publicity"]{
          _id,
          _createdAt,
          name,
          designation,
          gitUrl,
          linkedInUrl,
          portfolioUrl,
          "image": image.asset->url
      }`
  );
}

export async function getRnd(): Promise<member[]> {
  return client.fetch(
    groq`*[_type == "rnd"]{
          _id,
          _createdAt,
          name,
          designation,
          gitUrl,
          linkedInUrl,
          portfolioUrl,
          "image": image.asset->url
      }`
  );
}

export async function getSponsorship(): Promise<member[]> {
  return client.fetch(
    groq`*[_type == "sponsorship"]{
          _id,
          _createdAt,
          name,
          designation,
          gitUrl,
          linkedInUrl,
          portfolioUrl,
          "image": image.asset->url
      }`
  );
}

export async function getWie(): Promise<member[]> {
  return client.fetch(
    groq`*[_type == "wie"]{
          _id,
          _createdAt,
          name,
          designation,
          gitUrl,
          linkedInUrl,
          portfolioUrl,
          "image": image.asset->url
      }`
  );
}
