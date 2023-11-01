'use client'

import {
  DataGrid,
  GridActionsCellItem,
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from '@mui/x-data-grid'
import { MdDeleteOutline } from 'react-icons/md'
// import { FiEdit3 } from 'react-icons/fi'
import { FaRegEye } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { deleteResult } from '@/api/resultsApi'

const ResultGrid = ({ data, totalCount }) => {
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
      `/admin-panel/dashboard/results-list?page=${model.page}&limit=${model.pageSize}`
    )
  }

  const viewProduct = (id) => {
    const url = `/results/${id}`
    window.open(url, '_blank')
  }

  const deleteData = async (id) => {
    // console.log(id)
    if (confirm('Do you really want to delete?')) {
      await deleteResult(id)
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
            flex: 0.1,
            headerAlign: 'center',
            align: 'center',
          },
          {
            field: 'view',
            headerName: 'View',
            type: 'actions',
            flex: 0.1,
            getActions: (params) => [
              <GridActionsCellItem
                key={params.row._id}
                icon={<FaRegEye color="#ff7b92" size={22} />}
                label="View"
                onClick={() => viewProduct(params.row._id)}
              />,
            ],
            headerAlign: 'center',
            align: 'center',
          },
          {
            field: 'image',
            headerName: 'Image',
            flex: 0.1,
            renderCell: (params) => {
              const imageUrl = params.value && params.value[0]?.url
              return (
                <Image
                  src={imageUrl}
                  alt="Product"
                  width={500}
                  height={500}
                  className="product-img max-w-[75px]"
                />
              )
            },
            headerAlign: 'center',
            align: 'center',
          },
          {
            field: 'title',
            headerName: 'Title',
            flex: 0.2,
            editable: false,
            headerAlign: 'center',
            align: 'center',
          },
          {
            field: 'description',
            headerName: 'Description',
            flex: 0.2,
            editable: false,
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
                key={params.row._id}
                icon={<MdDeleteOutline className="!text-[#ff7b92]" size={22} />}
                label="Delete"
                onClick={() => deleteData(params.row._id)}
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

export default ResultGrid

export function QuickSearchToolbar() {
  return (
    <div className="text-white">
      <GridToolbarContainer>
        <GridToolbarQuickFilter />
      </GridToolbarContainer>
    </div>
  )
}
