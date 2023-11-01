'use client'

import {
  DataGrid,
  GridActionsCellItem,
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from '@mui/x-data-grid'
import { MdDeleteOutline } from 'react-icons/md'
import Ratings from '@/components/Ratings'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { deleteRatings } from '@/api/ratingsApi'

const RatingsGrid = ({ data, totalCount }) => {
  const router = useRouter()

  const { userInfo, token } = useSelector((state) => state?.user)

  useEffect(() => {
    if (!userInfo) {
      router.push('/admin-panel/login')
      toast.error('You are not admin!')
    } else if (userInfo && userInfo?.role !== 'admin') {
      router.push('/admin-panel/login')
      toast.error('You are not admin!')
    }
  }, [userInfo, token])

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 1,
  })

  const handlePaginationChange = (model) => {
    setPaginationModel(model)
    router.push(
      `/admin-panel/dashboard/ratings-list?page=${model.page}&limit=${model.pageSize}`
    )
  }

  const deleteData = async (id) => {
    if (confirm('Do you really want to delete?')) {
      await deleteRatings(id)
      toast.success('Deleted! Refresh to see!')
    }
  }

  return (
    <div className="md:mx-10 mx-2 my-10">
      <DataGrid
        columns={[
          {
            field: '_id',
            headerName: 'ID',
            flex: 0.2,
            headerAlign: 'center',
            align: 'center',
          },
          {
            field: 'image',
            headerName: 'Image',
            flex: 0.2,
            renderCell: (params) => {
              // console.log(imageUrl)
              return (
                <Image
                  src={params?.value}
                  alt="Product"
                  width={500}
                  height={500}
                  className="product-img max-w-[75px] rounded-full"
                />
              )
            },
            headerAlign: 'center',
            align: 'center',
          },
          {
            field: 'fullName',
            headerName: 'Name',
            flex: 0.2,
            editable: false,
            headerAlign: 'center',
            align: 'center',
          },
          {
            field: 'email',
            headerName: 'Email',
            flex: 0.2,
            editable: false,
            headerAlign: 'center',
            align: 'center',
          },
          {
            field: 'comment',
            headerName: 'Review',
            flex: 0.2,
            editable: false,
            headerAlign: 'center',
            align: 'center',
          },
          {
            field: 'star',
            headerName: 'Ratings',
            flex: 0.2,
            editable: false,
            renderCell: (params) => {
              return (
                <div className="flex items-center justify-start gap-2">
                  <Ratings item={params?.value} size={19} />{' '}
                  <div className="text-white text-xl">{params?.value}</div>
                </div>
              )
            },
            headerAlign: 'center',
            align: 'center',
          },
          {
            field: 'createdAt',
            headerName: 'Created At',
            flex: 0.2,
            editable: false,
            headerAlign: 'center',
            align: 'center',
          },
          {
            field: 'actions',
            headerName: 'Actions',
            type: 'actions',
            flex: 0.1,
            getActions: (params) => [
              <GridActionsCellItem
                icon={<MdDeleteOutline className="!text-[#ff7b92]" size={22} />}
                label="Delete"
                onClick={() => deleteData(params.id)}
              />,
            ],
            headerAlign: 'center',
            align: 'center',
          },
        ]}
        rows={data}
        getRowId={(row) => row?._id}
        rowHeight={70}
        rowCount={totalCount}
        pageSizeOptions={[5, 10, 20, 25]}
        paginationModel={paginationModel}
        paginationMode="server"
        onPaginationModelChange={handlePaginationChange}
        slots={{ toolbar: QuickSearchToolbar }}
      />{' '}
    </div>
  )
}

export default RatingsGrid

export function QuickSearchToolbar() {
  return (
    <div className="text-white">
      <GridToolbarContainer>
        <GridToolbarQuickFilter />
      </GridToolbarContainer>
    </div>
  )
}
